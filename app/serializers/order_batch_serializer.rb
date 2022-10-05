class OrderBatchSerializer < ActiveModel::Serializer
  attributes :id, :category
  has_many :order_tickets, serializer: OrderTicketSerializer
end
