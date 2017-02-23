class StepNumToFloat < ActiveRecord::Migration[5.0]
  def change
    change_column :steps, :order, :float
  end
end
