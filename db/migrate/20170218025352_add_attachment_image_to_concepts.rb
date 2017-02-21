class AddAttachmentImageToConcepts < ActiveRecord::Migration
  def self.up
    change_table :concepts do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :concepts, :image
  end
end
