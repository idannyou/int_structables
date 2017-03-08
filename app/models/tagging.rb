class Tagging < ApplicationRecord
  validates :concept, :category, presence: true

  belongs_to :concept
  belongs_to :category

end
