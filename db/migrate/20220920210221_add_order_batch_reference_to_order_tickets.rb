class AddOrderBatchReferenceToOrderTickets < ActiveRecord::Migration[7.0]
  def change
    add_reference :order_tickets, :order_batch, null: true, foreign_key: true
  end
end
