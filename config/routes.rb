Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :concepts, only: [:index, :create, :show, :update, :destroy] do
      resources :images, only: [:index, :create, :destroy, :update]
      resources :comments, only: [:index, :create, :destroy, :update]
    end
    resources :steps, only: [:index, :show, :create, :destroy, :update] do
      resources :images, only: [:index, :create, :destroy, :update]
      resources :comments, only: [:index, :create, :destroy, :update]
    end
  end
end
