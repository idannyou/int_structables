class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def getAllCategories
    Category.all
  end
end
