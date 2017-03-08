class Category < ApplicationRecord

  validates :name, presence: true

  has_many :concepts,
    through: :taggings,
    source: :concept

  has_many :taggings, dependent: :destroy, inverse_of: :category
end
