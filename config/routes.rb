Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
get 'dashboards/index'
  
  get 'students/index',to: 'students#index'
  get 'students/finance',to: 'students#finance'
  get 'students/exam', to: 'students#exam'
  get 'home/index',to: 'home#index'
  root 'home#index' 
end
