class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Credentials"], status: 422
    end
  end

  def show
    @user = current_user
    if @user
      render 'api/users/show'
    else
      render json: nil
    end
  end

  def destroy
    @user = current_user
    loggout
    render 'api/users/show'
  end

end
