
@concepts.each do |concept|
  json.set! concept.id do
    json.extract! concept, :id, :image_url, :title
    json.username concept.user.username
  end
end
