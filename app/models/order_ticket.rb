class OrderTicket < ApplicationRecord
  belongs_to :item, optional: true
  belongs_to :order_batch, optional: true
end
