class Step < ApplicationRecord
  validates :order, :concept_id, presence: true

  has_many :images, as: :imageable, dependent: :delete_all, inverse_of: :imageable
  has_many :comments, as: :commentable, dependent: :delete_all, inverse_of: :commentable
  belongs_to :concept

  def extractImgUrl
    img_url_array = [];
    if self.images.length > 0
      self.images.each do |image|
        img_url_array.push(image.image.url)
      end
    else
      return []
    end
    return img_url_array
  end

end
