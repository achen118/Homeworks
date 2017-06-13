class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |cup, idx|
      4.times { cup << :stone unless idx == 6 || idx == 13 }
    end
  end

  def valid_move?(start_pos)
    if start_pos > 12 || start_pos < 1
      raise "Invalid starting cup"
    end
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []
    add_idx = start_pos
    until stones.empty?
      add_idx += 1
      add_idx = 0 if add_idx > 13
      if add_idx == 6
        @cups[6] << stones.pop if current_player_name == @name1
      elsif add_idx == 13
        @cups[13] << stones.pop if current_player_name == @name2
      else
        @cups[add_idx] << stones.pop
      end
    end
    render
    next_turn(add_idx)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    return :prompt if ending_cup_idx == 6 || ending_cup_idx == 13
    return :switch if @cups[ending_cup_idx].length == 1
    return ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    www
  end

  def winner
    return @name1 if @cups[6].length > @cups[13].length
    return @name2 if @cups[6].length < @cups[13].length
    return :draw
  end
end
