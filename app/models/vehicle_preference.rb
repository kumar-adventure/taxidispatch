class VehiclePreference < ActiveRecord::Base
  belongs_to :bookings
  attr_accessible :number_of_vehicle, :booking_id, :vehicle_type_id

  VEHICLE_PREFERENCE_TYPE = {	:FourWheeler => 1, :TwoWheeler => 2, :Loading => 3, :Flight => 4}
end
