class CreateOrderTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :order_tickets do |t|
      t.belongs_to :item, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
