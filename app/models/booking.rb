class Booking < ActiveRecord::Base
  belongs_to :users
  has_many :vehicle_preferences
  has_many :pickup_addresses
  has_many :dropoff_addresses
  belongs_to :texi_infos
  
  attr_accessible :via_address, :number_of_bags, :number_of_passengers, :booked_hours, :flight_info, :recurrent_type, :pickup_datetime, :passenger_name, :passenger_phone_no, :passenger_email, :return_pickup_datetime, :pickup_time, :dropoff_time, :vehicle_preferences_attributes,:pickup_addresses_attributes, :dropoff_addresses_attributes, :user_id, :taxi_info_id

  accepts_nested_attributes_for :vehicle_preferences, :pickup_addresses, :dropoff_addresses
  

  def self.per_page
    10
  end
  
  def showpickup_address(booking_id)
    pa = PickupAddress.where(:booking_id => booking_id).last
    pa.address rescue ""
  end 
  
  def showdropoff_address(booking_id)
    pa = DropoffAddress.where(:booking_id => booking_id).last
    pa.address rescue ""
  end
  
  def calculate_distance(booking_id)
    pa = PickupAddress.where(:booking_id => booking_id).last
    da = DropoffAddress.where(:booking_id => booking_id).last
    @loc_distance = Geocoder::Calculations.distance_between(pa.address, da.address, :units=> :km).round(1)
  end
  
  def taxi_driver(taxi_info_id)
    @texi_info = TexiInfo.where(:id => taxi_info_id).first
    @texi_info.driver_name rescue ""
  end
end

