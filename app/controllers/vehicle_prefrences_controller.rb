class VehiclePrefrencesController < ApplicationController
  def new
    @vehicle_preference = VehiclePreference.new
  end
  
  def create
     @vehicle_preference = VehiclePreference.new(
    :number_of_vehicle => params[:vehicle_prefrence][:number_of_vehicle], 
    :booking_id => params[:vehicle_prefrence][:booking_id], 
    :vehicle_type_id => params[:vehicle_prefrence][:vehicle_type_id])
  end
  
end
