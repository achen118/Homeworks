require 'byebug'

class Map

  # debugger

  def initialize
    @map = []
  end

  def assign(key, value)
    idx = @map.index { |sub_array| sub_array.first == key }
    return @map[idx] = value if idx
    return @map << [key, value]
  end

  def lookup(key)
    @map.each do |sub_array|
      return sub_array.last if sub_array.first == key
    end
  end

  def remove(key)
    @map.reject! { |sub_array| sub_array.first == key }
  end

  def show
    @map.dup
  end

end
