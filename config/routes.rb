Rails.application.routes.draw do
  
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    # resources :parks, only: [:index]
    scope :api do 
    # get '/api/parks', to: "parks#index"
    # get :parks, to: "parks#index"
      post '/users', to: 'users#create'
      post '/login', to: "auth#create"
      # get '/welcome', to: "application#welcome"
      post 'user_token', to: 'user_token#create'
      # post '/api/parks', to: "parks#create"
      resources :checkins
      resources :parks
      get '/checkins/:id/checkout', to: 'checkins#checkout'
      get '/parks/:id/current', to: 'parks#current_users'
    end 

end
