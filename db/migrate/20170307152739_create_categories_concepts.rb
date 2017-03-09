class CreateCategoriesConcepts < ActiveRecord::Migration[5.0]
  def change
    create_table :categories_concepts do |t|
      t.integer :concept_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end
