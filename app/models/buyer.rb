class Buyer < ApplicationRecord
  belongs_to :agent
  serialize :cities, Array

  #instance method on a buyer
  def yo
    # cities should be an array
    self.cities.join('-')
      city 
  end
end
