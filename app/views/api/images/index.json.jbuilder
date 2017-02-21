
@images.each do |image|
  json.set! image.id do
    json.extract! image, :id
    json.image_url image.image.url
    json.imageable image.imageable
    json.imageable_type image.imageable_type
  end
end
