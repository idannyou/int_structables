class ChangeStepBodyToNullTrue < ActiveRecord::Migration[5.0]
  def change
    change_column :steps, :body, :string, :null => true
  end
end
