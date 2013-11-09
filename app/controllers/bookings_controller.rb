class BookingsController < ApplicationController

	before_filter :authenticate_user!

	def index
	end

	def booking_history
	end

  def new
    @booking = Booking.new
    @booking.vehicle_preferences.build
  end

  def create
    @booking = Booking.create(params[:booking].permit(:pickup_address, :dropoff_address, :via_address, :number_of_bags, :number_of_passengers, :booked_hours, :flight_info, :recurrent_type, :pickup_datetime, :return_pickup_datetime,  vehicle_preferences_attributes: [:number_of_vehicle, :booking_id, :vehicle_type_id]))
    @booking.save
  end

end
