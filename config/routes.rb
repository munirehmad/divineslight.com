Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #

  resources :memes

  root 'home#index'
  get  '/c_admin/new', to: 'c_admin#index'
  post '/c_admin/upload', to: 'c_admin#upload'
end
