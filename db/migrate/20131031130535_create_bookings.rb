class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
    	t.string 	:pickup_place
    	t.string  :dropoff_place
    	t.date  	:pickup_date
    	t.date  	:dropoff_date
    	t.time  	:pickup_time
    	t.time 		:dropoff_time
    	t.date  	:return_pickup_date
    	t.time  	:return_pickup_time
    	t.integer :bags
    	t.integer :passengers
    	t.string 	:hour_booked
      t.timestamps
    end
  end
end
