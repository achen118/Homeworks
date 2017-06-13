# Big O-ctopus and Biggest Fish

# A Very Hungry Octopus wants to eat the longest fish in an array of fish.

fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# => "fiiiissshhhhhh"

# Sluggish Octopus
# Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to all other fish lengths

def longest_fish(fish)
  longest = ""
  fish.each_index do |idx1|
    (idx1 + 1...fish.length).each do |idx2|
      if fish[idx1].length > fish[idx2].length
        longest = fish[idx1]
      end
      longest = fish[idx2]
    end
  end
  longest
end

# Dominant Octopus
# Find the longest fish in O(n log n) time. Hint: You saw a sorting algorithm that runs in O(n log n) in the Sorting Demo. Remember that Big O is classified by the dominant term.

def fish_merge_sort(fish)
  return fish if fish.length < 2
  mid_idx = fish.length / 2
  left_sorted = fish_merge_sort(fish.take(mid_idx))
  right_sorted = fish_merge_sort(fish.drop(mid_idx))
  help_fish_merge(left_sorted, right_sorted)
end

def help_fish_merge(left, right)
  merged_fish = []
  until left.empty? || right.empty?
    case left.first.length <=> right.first.length
    when 0
      merged_fish << left.shift
    when -1
      merged_fish << left.shift
    when 1
      merged_fish << right.shift
    end
  end
  merged_fish += left
  merged_fish += right
end

p fish_merge_sort(fish)

# Clever Octopus
# Find the longest fish in O(n) time. The octopus can hold on to the longest fish that you have found so far while stepping through the array only once.

# Dancing Octopus
# Full of fish, the Octopus attempts Dance Dance Revolution. The game has tiles in the following directions:

# tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
# To play the game, the octopus must step on a tile with her corresponding tentacle. We can assume that the octopus's eight tentacles are numbered and correspond to the tile direction indices.

# Slow Dance
# Given a tile direction, iterate through a tiles array to return the tentacle number (tile index) the octopus must move. This should take O(n) time.

# slow_dance("up", tiles_array)
# > 0

# slow_dance("right-down", tiles_array)
# > 3

# Constant Dance!
# Now that the octopus is warmed up, let's help her dance faster. Use a different data structure and write a new function so that you can access the tentacle number in O(1) time.

# fast_dance("up", new_tiles_data_structure)
# > 0

# fast_dance("right-down", new_tiles_data_structure)
# > 3
