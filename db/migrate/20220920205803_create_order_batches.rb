class CreateOrderBatches < ActiveRecord::Migration[7.0]
  def change
    create_table :order_batches do |t|
      t.string :category
      t.boolean :active
      t.string :from

      t.timestamps
    end
  end
end
