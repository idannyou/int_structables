class RemoveImageFromConcept < ActiveRecord::Migration[5.0]
  def change
    remove_column :concepts, :image_file_name
    remove_column :concepts, :image_content_type
    remove_column :concepts, :image_file_size
    remove_column :concepts, :image_updated_at
  end
end
