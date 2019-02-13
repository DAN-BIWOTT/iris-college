Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
get 'dashboards/index'
  
namespace :api do
  namespace :v1 do
    resources :students
  end
end
  get 'home/index',to: 'home#index'
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
