class CreateSteps < ActiveRecord::Migration[5.0]
  def change
    create_table :steps do |t|
      t.string :body, null: false
      t.integer :order, null: false, uniquie: true
      t.integer :concept_id, null: false

      t.timestamps
    end
  end
end
