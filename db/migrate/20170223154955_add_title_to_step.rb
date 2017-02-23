class AddTitleToStep < ActiveRecord::Migration[5.0]
  def change
    add_column :steps, :title, :string
  end
end
