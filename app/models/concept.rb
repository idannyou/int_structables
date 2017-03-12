class Concept < ApplicationRecord
  validates :title, :description, :user_id, presence: true

  belongs_to :user
  has_many :images, as: :imageable, dependent: :delete_all, inverse_of: :imageable
  has_many :comments, as: :commentable, dependent: :delete_all, inverse_of: :commentable
  has_many :steps, dependent: :delete_all
  has_many :taggings, dependent: :delete_all, inverse_of: :concept

  has_many :categories,
    through: :taggings,
    source: :category



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

  def self.find_by_title(name)
    # Concept.includes(:images).where("title ILIKE '%#{name}%'")
    Concept.includes(:images).joins(self.join_sql).where('categories.name ILIKE ?', name)
      .or(Concept.includes(:images).joins(self.join_sql).where('concepts.title ILIKE ?', "%#{name}%"))
      .distinct
  end

  private

    def self.join_sql
      sql = "INNER JOIN taggings
      ON concepts.id = taggings.concept_id
      INNER JOIN categories
      ON categories.id = taggings.category_id"
      sql
    end

end
