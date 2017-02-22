class Step < ApplicationRecord
  validates :order, :concept_id, presence: true

  has_many :images, as: :imageable, dependent: :delete_all, inverse_of: :imageable
  belongs_to :concept



end
