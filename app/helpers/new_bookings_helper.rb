module NewBookingsHelper
  def get_tab_status(action, tab_string)
    case tab_string
      when 'index'
        return 'active' if ['index'].include?(action)
      when 'booking_history'
        return 'active' if ['booking_history'].include?(action)
    end
  end

  def get_tabs_partial(action)
    case action
      when 'index'
        'new_booking_tab'
      when 'booking_history'
        'booking_history_tab'
    end
  end

  def get_new_booking_partial(action)
    case action
      when 'index'
        "new_bookings/new_booking_tab"
      when 'booking_history'
        "new_bookings/booking_history_tab"
    end
  end
end
