class Booking < ActiveRecord::Base
  has_many :vehicle_preferences
  attr_accessible :pickup_address, :dropoff_address, :via_address, :number_of_bags, :number_of_passengers, :booked_hours, :flight_info, :recurrent_type, :pickup_datetime, :return_pickup_datetime, :number_of_vehicle, :booking_id, :vehicle_type_id
  accepts_nested_attributes_for :vehicle_preferences
end
