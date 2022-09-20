class OrderBatch < ApplicationRecord
    has_many :order_tickets, dependent: :destroy
end
