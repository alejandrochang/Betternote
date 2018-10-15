Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:index, :destroy, :update, :show]
    resources :notebooks, only: [:create, :destroy, :show, :index] do
      resources :notes, only: [:create]
    end
    resources :tags, only: [:create, :destroy, :index, :show]
  end

  root "static_pages#root"

end
