class HomeController < ApplicationController
  def index
  end

  def help
  end

  def email_us
    render :layout => false
  end
  
end
