class DropCatConAddTag < ActiveRecord::Migration[5.0]
  def up
    create_table :taggings do |t|
      t.integer :concept_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end
    add_index :taggings, :concept_id
    add_index :taggings, :category_id
    add_index :taggings, [:concept_id, :category_id], unique: true
  end

  def down
    drop_table :categories_concepts
  end
end
