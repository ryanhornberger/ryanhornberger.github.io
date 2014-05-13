require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

desc 'list available commands'
task :help do
  system 'rake -T'
end

namespace :app do
  desc 'compile and serve static site'
  task :serve do
    system 'bundle exec jekyll serve'
  end

  desc 'compile and serve static site (watch for changes)'
  task :watch do
    system 'bundle exec jekyll serve --watch'
  end

  desc 'compile and serve static site with drafts (watch for changes)'
  task :drafts do
    system 'bundle exec jekyll serve --drafts --watch'
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

namespace :posts do
  desc 'create a new draft'
  task :draft , :title do |t, args|
    if args.title
      title = args.title
    else
      print "Enter a title for your post: "
      title = STDIN.gets.chomp
    end

    filename = "./src/_drafts/#{Time.now.strftime('%Y-%m-%d')}-#{title}.md"
    system "touch #{filename}"
  end
end
