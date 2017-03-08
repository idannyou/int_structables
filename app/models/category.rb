class Category < ApplicationRecord
  has_many :concepts,
    through: :categories_concepts,
    source: :concept

  has_many :categories_concepts
end
