
@steps.each do |step|
  json.set! step.id do
    json.extract! step, :id, :body, :concept_id, :order, :title
    json.image_url step.extractImgUrl
  end
end
