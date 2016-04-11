'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class Spring2016Footer extends React.Component 
{

	render()
	{
		return (
			<footer id="footer">
			    <div className="foot-body">
			        <div itemScope itemType="http://data-vocabulary.org/Person">
			            <a href="/"><h2>Hi, I'm <span itemProp="name">Ryan Hornberger</span></h2></a>
			            <img id="profile-pic" itemProp="photo" src="/a/images/profile.png" alt="Ryan Hornberger" style={{width:"150px", margin:"15px 0px 5px"}}/>
			            <p style={{maxWidth:"560px", paddingLeft:"0px"}}>
			                I'm a 
			                <span itemProp="address" itemScope itemType="http://data-vocabulary.org/Address">
			                    <span itemProp="locality">Provo</span>, 
			                    <span itemProp="region">Utah</span>
			                </span> 
			                based Entrepreneur currently working at
			                <span itemProp="affiliation"><a href="https://scan.me" className="white underline" target="_blank">Scan.me</a></span>
			                as 
			                <span itemProp="title"> Vice President</span>
			                of
			                <a href="https://scan.me/scan-to-pay" className="white underline" target="_blank">Scan to Pay</a>.
			                Come check out how your customers can buy straight from your print ads.
			            </p>
			            <a href="https://plus.google.com/+RyanHornberger" target="_blank" rel="publisher"></a>
			        </div>

			        <div className="pushed divided">
			            <nav>
			                <ul>
			                    {/*
			                    <li><a href="/articles" className="white"> ARTICLES </a></li>
			                    */}
			                    <li><h2><a href="/articles"> ARTICLES </a></h2></li>     
			                    <li><h2><a href="https://scan.me/bx4sgr" target="_blank"> PAY ME </a></h2></li>         
			                </ul>
			            </nav>
			        </div>

			        <div className="pushed divided">
			            <h2> FOLLOW ME </h2>
			            <a href="https://twitter.com/ryanhornberger" target="_blank">
			                <span className="fa-stack fa-lg">                
			                  <i className="fa fa-circle fa-stack-2x"></i>
			                  <i className="fa fa-twitter fa-stack-1x darkGray"></i>
			                </span>
			            </a>
			            {/*
			            <a href="https://github.com/ryanhornberger" target="_blank">
			                <span className="fa-stack fa-lg">
			                  <i className="fa fa-github fa-stack-2x"></i>
			                </span>
			            </a>
			            */}
			            <a href="https://www.linkedin.com/in/rhornberger" target="_blank">
			                <span className="fa-stack fa-lg">                
			                  <i className="fa fa-circle fa-stack-2x"></i>
			                  <i className="fa fa-linkedin fa-stack-1x darkGray"></i>
			                </span>
			            </a>
			        </div>

			    </div>
			</footer>
		);
	}
		
}

module.exports = Spring2016Footer;
