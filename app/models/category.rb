class Category < ApplicationRecord
  has_many :concepts,
    through: :categories_concept,
    source: :concept
end
