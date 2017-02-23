class Comment < ApplicationRecord

    validate :content, :user_id

    belongs_to :commentable, polymorphic: true, inverse_of: :commentable
    belongs_to :user


end
