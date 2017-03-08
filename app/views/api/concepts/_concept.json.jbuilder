json.extract! concept, :id, :title, :description, :equations, :user_id, :publish
json.categories concept.categories
json.images concept.images
json.images_url concept.extractImgUrl
json.username concept.user.username
json.steps concept.steps do |step|
  json.extract! step, :id, :order
  json.images_url step.extractImgUrl
  json.title step.title
  json.body step.body
end
json.concepts concept.user.concepts do |concept|
  json.extract! concept, :id
  json.images concept.images
  json.images_url concept.extractImgUrl
  json.publish concept.publish
end
