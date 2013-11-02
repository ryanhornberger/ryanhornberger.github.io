namespace :app do
  require 'rubygems'
  require 'rake'
  require 'rdoc'
  require 'date'
  require 'yaml'
  require 'tmpdir'
  require 'jekyll'

  desc 'compile and serve static site'
  task :serve do
    sh 'bundle exec jekyll serve'
  end

  desc 'compile and serve static site (watch for changes)'
  task :watch do
    sh 'bundle exec jekyll serve --watch'
  end

  desc 'Generate blog files'
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({})).process
  end

  desc 'Generate and publish blog GitHub'
  task :publish => [:generate] do
    Dir.mktmpdir do |tmp|
      system "mv dist/* #{tmp}"
      system 'git checkout master'
      system 'rm -rf *'
      system "mv #{tmp}/* ."
      message = "Site updated at #{Time.now.utc}"
      system 'git add .'
      system "git commit -am #{message.shellescape}"
      system 'git push origin master'
      system 'git checkout development'
      system "echo 'Deployed to GitHub'"
    end
  end

end
