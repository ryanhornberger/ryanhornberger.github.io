module Jekyll

  class IndexPostPageGenerator < Generator
    safe true

    def generate(site)
      site_posts = site.posts

      if site_posts.count > 0
        site.pages.each do |page|
          if page.url.start_with? '/index.'
            if page.data.has_key?('generate_from_post') && page.data['generate_from_post']              
              last_post = site_posts.last

              title = page.data['title'] || 'Index Page'
              description = page.data['description'] || 'Index Description'

              page.data = last_post.data.dup
              page.data['title'] = title
              page.data['description'] = description

              page.content = last_post.content
            end
          end
        end
      end
    end
  end

end