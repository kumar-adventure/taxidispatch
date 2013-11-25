module BookingsHelper
	def get_tab_status(action, tab_string)
    case tab_string
      when 'index'
        return 'active' if ['index'].include?(action)
      when 'new'
        return 'active' if ['new'].include?(action)
      when 'booking_history'
        return 'active' if ['booking_history'].include?(action)
    end
  end

  def get_tabs_partial(action)
    case action
      when 'index'
        'booking_tab'
      when 'new'
        'booking_tab'
      when 'booking_history'
        'booking_history'
    end
  end

  def get_booking_partial(action)
    case action
      when 'index'
        "bookings/booking_tab"
      when 'new'
        "bookings/booking_tab"
      when 'booking_history'
        "bookings/booking_history"
    end
  end
  
  def booking_pickup_date(date)
    date.strftime("%d %b %Y") rescue 0
  end
  
  def booking_pickup_time(time)
    time.strftime("%H:%M") rescue 0
  end
  
end
