
@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id
    json.username comment.user.username
    json.content comment.content
    json.commentable comment.commentable
    json.commentable_type comment.commentable_type
  end
end
