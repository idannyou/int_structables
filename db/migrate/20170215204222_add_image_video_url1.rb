class AddImageVideoUrl1 < ActiveRecord::Migration[5.0]
  def change
    remove_column :concepts, [:image_url, :video_url]
    add_column :concepts, :image_url, :string
    add_column :concepts, :video_url, :string
  end
end
