class CreateConcepts < ActiveRecord::Migration[5.0]
  def change
    create_table :concepts do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :equations
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index(:concepts, :user_id)
  end
end
