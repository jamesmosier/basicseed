  #http://stackoverflow.com/questions/15917463/embedding-markdown-in-jekyll-html
  #https://coderwall.com/p/lw1ncw/use-markdown-inside-html-blocks-in-jekyll

  module Jekyll
      class MarkdownBlock < Liquid::Block
        def initialize(tag_name, text, tokens)
          super
        end
        require "kramdown"
        def render(context)
          content = super
          "#{Kramdown::Document.new(content).to_html}"
        end
      end
    end
    Liquid::Template.register_tag('markdown', Jekyll::MarkdownBlock)