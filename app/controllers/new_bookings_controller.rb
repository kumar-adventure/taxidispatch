class NewBookingsController < ApplicationController
	before_filter :authenticate_user!
	
	def index
	end

	def booking_history
	end
end
