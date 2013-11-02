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

  desc 'compile and serve static site and watch for changes'
  task :watch do
    sh 'bundle exec jekyll serve --watch'
  end

  desc 'Generate blog files'
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({})).process
  end

  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do
    Dir.mktmpdir do |tmp|
      system "mv dist/* #{tmp}"
      system 'git checkout gh-pages'
      system 'rm -rf *'
      system "mv #{tmp}/* ."
      message = "Site updated at #{Time.now.utc}"
      system 'git add .'
      system "git commit -am #{message.shellescape}"
      system 'git push origin gh-pages'
      system 'git checkout master'
      system "echo 'Deployed to GitHub'"
    end
  end

  desc "Prepare a branch for gh-pages"
  task :prepare_github do
    system 'git checkout --orphan gh-pages'
    system 'rm -rf *'
    system "echo 'Hello World' > index.html"
    system 'git add .'
    system "git commit -am 'New Orphan Branch'"
    system 'git checkout master'
    system "echo 'GH-PAGES Branch Prepared'"  
  end

end
