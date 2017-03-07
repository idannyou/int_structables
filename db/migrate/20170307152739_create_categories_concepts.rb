class CreateCategoriesConcepts < ActiveRecord::Migration[5.0]
  def change
    create_table :categories_concepts do |t|

      t.timestamps
    end
  end
end
