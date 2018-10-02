Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    # resources :parks, only: [:index]
    scope :api do 
    # get '/api/parks', to: "parks#index"
    # get :parks, to: "parks#index"
    post '/api/parks', to: "parks#create"
    resources :parks, only: [:index, :create]
    end 

end
