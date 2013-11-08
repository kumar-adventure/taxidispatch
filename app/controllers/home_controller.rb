class HomeController < ApplicationController
  def index
  	@texi_info = TexiInfo.all
  	@hash = Gmaps4rails.build_markers(@texi_info) do |user, marker|
		  marker.lat user.latitude
		  marker.lng user.longitude
		  marker.infowindow user.driver_name
		  marker.picture({
		  	"url" => "assets/img/ico/map/ico_location_mark.png",
        "width" =>  36,
        "height" => 36
		  	})
		end
  end

  def help
  end

  def email_us
    render :layout => false
  end
  
end