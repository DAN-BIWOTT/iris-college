Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api, :defaults => {:format => :json} do
  	namespace :v1 do
  		 resources :students
  	end
  end
  get 'home/courses',to:'home#courses'
  get 'home/single_course',to: 'home#single_course'
  get 'home/about_us',to:'home#about_us'
  get 'home/blog',to:'home#blog'
  get 'home/contact_us',to:'home#contact_us'
  get 'students/index',to: 'students#index'
  get 'students/finance',to: 'students#finance'
  get 'students/exam', to: 'students#exam'
  get 'home/index',to: 'home#index'
  root 'home#index' 
end