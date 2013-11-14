class TexiInfo < ActiveRecord::Base
	geocoded_by :address
	after_validation :geocode
  has_many :bookings
  attr_accessible :texi_no, :driver_name, :address, :city, :zipcode, :country, :longitude, :latitude
  
end
