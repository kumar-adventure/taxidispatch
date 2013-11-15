class BookingsController < ApplicationController

	before_filter :authenticate_user!

	def index
	end

	def booking_history
    @bookings = Booking.where(:user_id => current_user.id).paginate(:page => params[:page], :per_page => 10)
	end

  def new
    @booking = Booking.new
    @pickup_address = @booking.pickup_addresses.build
    @dropoff_address = @booking.dropoff_addresses.build
    @vehicle_preference = @booking.vehicle_preferences.build
  end

  def create
    @booking = Booking.create(booking_params)
    @booking.save
    redirect_to root_url
  end

  def booking_texi
    @booking = Booking.where(:user_id => 8).where('pickup_time <= ? AND dropoff_time >= ?', Time.now,  Time.now).where(:pickup_datetime => Time.now.to_date).where(:return_pickup_datetime => Time.now.to_date).order('pickup_datetime ASC').first rescue 0
    @ids = []
    unless @booking.blank?
      @bookings.each do |booking|
        @ids << booking.taxi_info_id
      end
      @ids = @ids.uniq
      @texi = TexiInfo.where.not(id: @ids).first
      return @texi.id
    end
    return 1
  end

  private
  def booking_params
    params[:booking][:user_id] = current_user.id
    params[:booking][:taxi_info_id] = booking_texi
    debugger
    params.require(:booking).permit(:dropoff_address, :via_address, :number_of_bags, :number_of_passengers, :booked_hours, :flight_info, :recurrent_type,:passenger_name, :passenger_phone_no, :passenger_email, :pickup_datetime, :return_pickup_datetime, :pickup_time, :dropoff_time, :user_id, :taxi_info_id, :vehicle_preferences_attributes => [:number_of_vehicle, :booking_id, :vehicle_type_id], :pickup_addresses_attributes => [:address, :booking_id], :dropoff_addresses_attributes => [:address, :booking_id])
  end
end
