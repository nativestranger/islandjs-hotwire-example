Rails.application.routes.draw do
  root "posts#index"
  resources :posts do
    resources :reactions, only: [:create, :destroy]
  end
  
  namespace :api do
    namespace :v1 do
      resources :posts, only: [] do
        resources :reactions, only: [:create]
        delete 'reactions/:emoji', to: 'reactions#destroy'
      end
    end
  end
  
  # IslandJS demo routes (you can remove these)
  get 'islandjs', to: 'islandjs_demo#index'
  get 'islandjs/react', to: 'islandjs_demo#react'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end
