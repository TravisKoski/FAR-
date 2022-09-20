Rails.application.routes.draw do
  post 'orders/open', to: "orders#open"
  put 'orders/add_item', to: "orders#add_item"
  get 'orders/review', to: "orders#review"
  delete 'orders/close', to: "orders#close"
  get 'orders/transmit', to: "orders#transmit"

  get "/items/find_by_category/:category", to: "items#by_category"
  put "/items/:id/adjust_PI/", to: "items#update_PI"
  resources :items
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
