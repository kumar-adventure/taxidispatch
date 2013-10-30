class PasswordsController < Devise::PasswordsController
  layout "user_account"
  
  def edit_password
    @user = current_user
    render :layout => false
  end

  def update_password
    @user = User.find(current_user.id)
    if @user.update_attributes(user_params)
      # Sign in the user by passing validation in case his password changed
      sign_in @user, :bypass => true
      redirect_to root_path
    else
      super
    end
  end

  private

  def user_params
    # NOTE: Using `strong_parameters` gem
    params.required(:user).permit(:password, :password_confirmation)
  end
end
