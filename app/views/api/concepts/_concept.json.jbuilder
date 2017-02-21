json.extract! concept, :id, :title, :description, :equations, :user_id
json.images concept.images
json.images_url concept.extractImgUrl
json.username concept.user.username
json.concepts concept.user.concepts do |concept|
  json.extract! concept, :id
  json.images concept.images
  json.images_url concept.extractImgUrl
end
