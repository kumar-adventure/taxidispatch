class Booking < ActiveRecord::Base
  belongs_to :users
  has_many :vehicle_preferences
  has_many :pickup_addresses
  has_many :dropoff_addresses
  attr_accessible :via_address, :number_of_bags, :number_of_passengers, :booked_hours, :flight_info, :recurrent_type, :pickup_datetime, :passenger_name, :passenger_phone_no, :passenger_email, :return_pickup_datetime, :pickup_datetime, :dropoff_time, :vehicle_preferences_attributes,:pickup_addresses_attributes, :dropoff_addresses_attributes, :user_id
  accepts_nested_attributes_for :vehicle_preferences, :pickup_addresses, :dropoff_addresses
end
