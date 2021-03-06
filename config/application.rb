require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Iris
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    config.assets.enabled = true
    config.assets.initialize_on_precompile = true
    config.serve_static_assets = true
    config.api_controllers_matcher="#{Rails.root}/app/controllers/api/student_show/*.rb"
    config.assets.paths << Rails.root.join("app", "assets", "fonts")
    config.assets.paths << Rails.root.join("app", "assets", "icon")
    config.assets.paths << Rails.root.join("app", "assets", "contact")
    config.assets.paths << Rails.root.join("app", "assets", "twitter")
  end
end
