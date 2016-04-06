'use strict';

import path from 'path';
import fse from 'fs-extra';
import webpack from 'webpack';
import nodeBourbon from 'node-bourbon';
import nodeNeat from 'node-neat';
import moment from 'moment';
import StaticFilesPlugin from 'static-files-plugin';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import config from './config.jsx';

// Just some setup stuff
var appPath = __dirname;
var compiledPath = path.join(appPath, '_compiled');

// Static Files Plugin setup
var staticModuleName = '_public';
var staticSourceDir = path.join(appPath, 'public');

// Remove existing compiled assets
fse.removeSync(compiledPath);

// Prepare to block out node_modules for the server compile
var nodeModules = {};
{
    fse.readdirSync(path.join(appPath, 'node_modules'))
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
}

// Track the compile time of the app
var compileTime = moment().utcOffset(0).format('YYYYMMDDThhmmssSSZZ');

// Figure out which paths to precompile
var paths = config.precompile.paths.map(function(pathToFile){
    return path.join('public', pathToFile); 
});

// This is the resolve command for all compile paths
var resolve = {
    alias: {
        'config':'./config.jsx'
    },
    modulesDirectories: 
    [
        'source',
        'node_modules'
    ],
    extensions:
    [
        "", 
        ".webpack.js", 
        ".web.js", 
        ".js",
        ".jsx"
    ]
}

// Webpack Module
module.exports = 
[
    // -- Server 
    // The server compiles just like the client and precomple so we know that everyone
    // is running the same compiled version of the code

    {
        name: 'Server',
        target: 'node',
        devtool: 'inline-source-map',
        externals: nodeModules,
        
        entry: 
        {
            'server': path.join(appPath, 'app.server.jsx')
        },

        output: 
        {
            path: compiledPath,
            filename: '[name].js'
        },

        module: 
        {
            loaders: 
            [
                { 
                    test: /\.jsx?$/, 
                    exclude: /node_modules/, 
                    loader: 'babel-loader'
                }
            ]
        },

        plugins: 
        [
            new webpack.BannerPlugin(
                'require("source-map-support").install();', 
                { raw: true, entryOnly: false }
            ),
            new webpack.DefinePlugin({
                COMPILE_TIME: `"${compileTime}"`
            })
        ],

        resolve: resolve
    },

    // -- Precompiled react files 
    // The application supports precompiling all react router paths into static files
    // this is awesome for situations where we want to serve this application on a static
    // file service.

    {
        name: 'Precompiled react router',
        target: 'node',
        devtool: 'inline-source-map',
        externals: nodeModules,
        
        entry: 
        {
            'renderer': path.join(appPath, 'source', 'precompileTools', 'webpackEntrypoint.jsx')
        },

        output: 
        {
            path: compiledPath,
            filename: '[name].js',
            libraryTarget: 'umd'
        },

        module: 
        {
            loaders: 
            [
                { 
                    test: /\.jsx?$/, 
                    exclude: /node_modules/, 
                    loader: 'babel-loader'
                }
            ]
        },

        plugins: 
        [
            new StaticSiteGeneratorPlugin(
                'renderer', 
                paths, 
                {}
            )
        ],

        resolve: resolve
    },

    // -- Precompiled static assets 
    // The server compiles static assets (jsx, scss, nunj) into static files and copies everything
    // else to the compiled directory. That way we can serve these files statically.
    
    {
        name: 'Precompiled static assets',
        
        devtool: 'inline-source-map',

        //entry: see the plugins for StaticFilesPlugin

        output: 
        {
            path: compiledPath,
            filename: '[name].js'
        },

        module: 
        {
            loaders: 
            [

                { 
                    test: /\.jsx$/, 
                    exclude: /node_modules/, 
                    loader: 'babel'
                },

                { 
                    test: /\.scss$/, 
                    loader: 'file?context=' + appPath + '&name=[path][name].css!sass?' + 
                        JSON.stringify({
                            'outputStyle':'expanded', //'expanded' is your alternative,
                            'includePaths': 
                                nodeNeat.includePaths
                                .concat([
                                    path.join(appPath, 'source'),
                                    path.join(appPath, 'node_modules')
                                ])
                        })
                },

                {
                    test: /\.(?=[^.]*$)(?!(jsx|scss)).*$/, //catch all remaining
                    exclude: /node_modules/,
                    loader: 'file?context=' + appPath + '&name=[path][name].[ext]'
                }
                
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                COMPILE_TIME: `"${compileTime}"`
            }),
            new StaticFilesPlugin(
                staticSourceDir,
                appPath,
                staticModuleName,
                null
            )
        ],

        resolve: resolve
    }
];
