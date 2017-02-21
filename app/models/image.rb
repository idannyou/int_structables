class Image < ApplicationRecord

  belongs_to :imageable, polymorphic: true, inverse_of: :imageable
  has_attached_file :image, default_url: "http://www.mathfunny.com/images/acute-angle-cute-math-joke-small.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def extractImgUrl
    self.image.url
  end


end
