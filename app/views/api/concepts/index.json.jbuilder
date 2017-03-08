
@concepts.each do |concept|
  json.set! concept.id do
    json.extract! concept, :id, :title, :publish
    json.categories concept.categories
    json.username concept.user.username
    json.images_url concept.extractImgUrl[0]
  end
end
