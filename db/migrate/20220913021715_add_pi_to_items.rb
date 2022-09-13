class AddPiToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :PI, :integer
  end
end
