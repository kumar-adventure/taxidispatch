module RidesHelper
	def get_rides_tab_status(action, tab_string)
    case tab_string
      when 'index'
        return 'active' if ['index'].include?(action)
      when 'current_rides'
        return 'active' if ['current_rides'].include?(action)
      when 'past_rides'
        return 'active' if ['past_rides'].include?(action)
      when 'cancelled_rides'
        return 'active' if ['cancelled_rides'].include?(action)
    end
  end

  def get_rides_tabs_partial(action)
    case action
      when 'index'
        'current_rides_tab'
      when 'past_rides'
        'past_rides_tab'
      when 'cancelled_rides'
        'cancelled_rides_tab'
    end
  end

  def get_rides_partial(action)
    case action
      when 'index'
        "rides/current_rides_tab"
      when 'past_rides'
        "rides/past_rides_tab"
      when 'cancelled_rides'
        "rides/cancelled_rides_tab"
    end
  end
end
