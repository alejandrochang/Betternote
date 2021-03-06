class Api::UsersController < ApplicationController
  #Sign Up users (create)

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      @notebook = Notebook.create({title: "First Notebook", user_id: @user.id})
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render 'api/users/show'
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
