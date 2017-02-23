class Comment < ApplicationRecord

    validates :content, :user_id, presence: true

    belongs_to :commentable, polymorphic: true, inverse_of: :commentable
    belongs_to :user


end
