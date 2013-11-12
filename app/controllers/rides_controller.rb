class RidesController < ApplicationController

	def index
    @rides = Booking.where(:user_id => current_user.id).last
  	@pickup_address = PickupAddress.where(:booking_id => @rides.id).first unless @rides.blank?
  	@dropoff_address = DropoffAddress.where(:booking_id => @rides.id).first unless @rides.blank?
  	@hash = Gmaps4rails.build_markers(@pickup_address) do |user, marker|
		  marker.lat user.latitude
		  marker.lng user.longitude
		  marker.infowindow @pickup_address.address
		  marker.picture({
		  	"url" => "assets/img/ico/map/ico_location_mark_a.png",
        "width" =>  36,
        "height" => 36
		  	})
		end
  	@hash1 = Gmaps4rails.build_markers(@dropoff_address) do |user, marker|
		  marker.lat user.latitude
		  marker.lng user.longitude
		  marker.infowindow @dropoff_address.address
		  marker.picture({
		  	"url" => "assets/img/ico/map/ico_location_mark_b.png",
        "width" =>  36,
        "height" => 36
		  	})
		end
  end

	def cancelled_rides
	end

	def past_rides
	end
end
