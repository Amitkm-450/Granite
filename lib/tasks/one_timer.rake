namespace :one_timer do
  desc "Set default views count for articles based on creation date"
  task set_default_views_for_articles: :environment do
    Article.find_each do |article|
      if article.created_at < 1.year.ago
        article.update(views_count: 100)
      else
        article.update(views_count: 10)
      end
    end
    puts "Default view counts have been set for all articles."
  end
end
