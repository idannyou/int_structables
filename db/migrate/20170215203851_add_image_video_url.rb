class AddImageVideoUrl < ActiveRecord::Migration[5.0]
  def change
    add_column :concepts, [:image_url, :video_url], :string
  end
end
