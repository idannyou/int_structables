class AddPublishToConcept < ActiveRecord::Migration[5.0]
  def change
    add_column :concepts, :publish, :boolean, default: false
  end
end
