Rails.application.routes.draw do
  # Test route
  # get '/hello', to: 'application#hello_world'
  
  # Resources
  resources :users, only: [:update, :destroy, :show]
  resources :sessions, only: [:create, :destroy]
  
  # Sessions Routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Sign Up Route
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
end
