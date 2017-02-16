class Concept < ApplicationRecord
  validates :title, :description, :user_id, presence: true

  belongs_to :user

  def username
    self.user.username
  end

end
