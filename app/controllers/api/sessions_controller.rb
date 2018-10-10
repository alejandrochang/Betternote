class Api::SessionsController < ApplicationController
  # Login/Sign In User
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ["Invalid username or password"], status: 422
    end
  end

  # logout user
  def destroy
    logout
    if current_user
      render json: {}
    else
      render json: ["No current user to log out"], status: 404
    end
  end
end
