class RidesController < ApplicationController

	def index
    @rides = Booking.where(:user_id => current_user.id).last
  end

	def cancelled_rides
	end

	def past_rides
	end
end
