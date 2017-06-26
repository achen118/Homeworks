class Cat < ActiveRecord::Base
  validates :name, presence: true

  include Toyable
end
