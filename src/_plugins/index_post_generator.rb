module Jekyll

  class IndexPostPage < Page
    def initialize(site, base, last_post)
      @site = site
      @base = base
      @dir  = "/"

      last_name = last_post.name
      dot_index = last_name.rindex('.')
      @name = "index#{last_name[dot_index..-1]}"

      process(name)

      self.data = last_post.data
      self.content = last_post.content
    end
  end

  class IndexPostPageGenerator < Generator
    safe true

    def generate(site)
      site_posts = site.posts

      if site_posts.count > 0
        site.pages.each do |page|
          if page.url.start_with? '/index.'
            if page.data.has_key?('generate_from_post') && page.data['generate_from_post']              
              last_post = site_posts.last

              page.data = last_post.data
              page.content = last_post.content
            end
          end
        end
      end
      

      #site.pages.each do |page|
      #  if page.url.start_with? '/index.'
      #    return
      #  end
      #end
      #site_posts = site.posts
      #
      #if site_posts.count == 0
      #  return
      #end
      #
      #site.pages << IndexPostPage.new(site, site.source, site_posts.last)
    end
  end

end