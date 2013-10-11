namespace :app do
  desc 'compile and serve static site'
  task :serve do
    sh 'bundle exec jekyll serve'
  end

  desc 'compile and serve static site and watch for changes'
  task :watch do
    sh 'bundle exec jekyll serve --watch'
  end
end

namespace :publish do
  require 'rubygems'
  require 'rake'
  require 'rdoc'
  require 'date'
  require 'yaml'
  require 'tmpdir'
  require 'jekyll'

  desc 'Generate blog files'
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({})).process
  end
end
