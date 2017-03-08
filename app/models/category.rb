class Category < ApplicationRecord

  validates :name, presence: true
  has_many :taggings, dependent: :destroy, inverse_of: :category

  has_many :concepts,
    through: :taggings,
    source: :concept

end
