Rails.application.routes.draw do
  get "/items/:category", to: "items#by_category"
  put "/items/:id/adjust_PI/", to: "items#update_PI"
  resources :items
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
