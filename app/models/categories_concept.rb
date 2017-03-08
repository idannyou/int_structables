class CategoriesConcept < ApplicationRecord
  belongs_to :concept,
    class_name: 'Concept',
    foreign_key: :concept_id,
    primary_key: :id

  belongs_to :category,
    class_name: 'Category',
    foreign_key: :category_id,
    primary_key: :id
end
