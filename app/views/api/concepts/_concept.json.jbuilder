json.extract! concept, :id, :title, :description, :equations, :user_id, :image_url, :video_url
json.username concept.user.username
json.concepts concept.user.concepts do |concept|
  json.extract! concept, :id, :image_url
end
