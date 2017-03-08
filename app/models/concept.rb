class Concept < ApplicationRecord
  validates :title, :description, :user_id, presence: true

  belongs_to :user
  has_many :images, as: :imageable, dependent: :delete_all, inverse_of: :imageable
  has_many :comments, as: :commentable, dependent: :delete_all, inverse_of: :commentable
  has_many :steps, dependent: :delete_all

  has_many :categories,
    through: :categories_concepts,
    source: :category

  has_many :categories_concepts, dependent: :delete_all


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
