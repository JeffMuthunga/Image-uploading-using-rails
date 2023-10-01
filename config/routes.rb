Rails.application.routes.draw do
  resources :properties
  resources :posts




  get "/latest", to: "posts#latest"

  get "/property_images", to: "properties#property_images"

end
