json.extract! @comment, :id, :commentable_id, :commentable_type, :content
json.username @comment.user.username
