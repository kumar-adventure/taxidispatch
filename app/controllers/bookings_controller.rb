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

  def edit
    @booking = Booking.where(:user_id => current_user.id).where('pickup_time <= ? AND dropoff_time >= ?', Time.now,  Time.now).where(:pickup_datetime => Time.now.to_date).order('pickup_datetime ASC').first rescue 0
    @booking = Booking.find(params[:id])
    render :layout => false
  end

  def update
    @booking = Booking.find(params[:id])
    @booking.update_attributes(params[:booking])
    redirect_to rides_path
  end
  
  def booking_texi
    @bookings = Booking.where(:user_id => current_user.id).where('pickup_time <= ? AND dropoff_time >= ?', Time.now,  Time.now).where(:pickup_datetime => Time.now.to_date).where(:return_pickup_datetime => Time.now.to_date).order('pickup_datetime ASC').first rescue 0
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

  def show_new_booking_map
    @pickup_address = Geocoder.search(params[:pick_up_addr]).first
    @dropoff_address = Geocoder.search(params[:drop_off_addr]).first
  	@hash = Gmaps4rails.build_markers(@pickup_address) do |user, marker|
		  marker.lat user.latitude
		  marker.lng user.longitude
		  marker.infowindow params[:pick_up_addr]
		  marker.picture({
		  	"url" => "/assets/img/ico/map/ico_location_mark_a.png",
        "width" =>  36,
        "height" => 36
		  	})
		end
  	@hash1 = Gmaps4rails.build_markers(@dropoff_address) do |user, marker|
		  marker.lat user.latitude
		  marker.lng user.longitude
		  marker.infowindow params[:drop_off_addr]
		  marker.picture({
		  	"url" => "/assets/img/ico/map/ico_location_mark_b.png",
        "width" =>  36,
        "height" => 36
		  	})
		end

    @loc_distance = Geocoder::Calculations.distance_between(params[:pick_up_addr], params[:drop_off_addr], :units=> :km).round(1)
    respond_to do |format|
      format.js
    end
  end

  def get_address
    booking = Booking.where(user_id: current_user.id).last
    pick_up_addr = PickupAddress.where(:booking_id => booking.id).last
    drop_off_addr = DropoffAddress.where(:booking_id => booking.id).last
    hash = {:pick_up_addr => pick_up_addr.address, :drop_off_addr => drop_off_addr.address}
    respond_to do |format|
      format.json { render :json => hash.to_json, :status => 200 }
    end
  end

  private
  def booking_params
    params[:booking][:user_id] = current_user.id
    params[:booking][:taxi_info_id] = booking_texi
    params.require(:booking).permit(:dropoff_address, :via_address, :number_of_bags, :number_of_passengers, :booked_hours, :flight_info, :recurrent_type,:passenger_name, :passenger_phone_no, :passenger_email, :pickup_datetime, :return_pickup_datetime, :pickup_time, :dropoff_time, :user_id, :taxi_info_id, :vehicle_preferences_attributes => [:number_of_vehicle, :booking_id, :vehicle_type_id], :pickup_addresses_attributes => [:address, :booking_id], :dropoff_addresses_attributes => [:address, :booking_id])
  end
end
