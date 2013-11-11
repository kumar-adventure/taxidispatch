class BookingsController < ApplicationController

	before_filter :authenticate_user!

	def index
	end

	def booking_history
	end

  def new
    @booking = Booking.new
    @vehicle_preference = @booking.vehicle_preferences.build
  end

  def create
    @booking = Booking.create(booking_params)
    @booking.save
    redirect_to root_url
  end
  
  private
  def booking_params
    params[:booking][:user_id] = current_user.id
    params.require(:booking).permit(:pickup_address, :dropoff_address, :via_address, :number_of_bags, :number_of_passengers, :booked_hours, :flight_info, :recurrent_type, :pickup_datetime, :return_pickup_datetime, :user_id, :vehicle_preferences_attributes => [:number_of_vehicle, :booking_id, :vehicle_type_id])
  end
end
