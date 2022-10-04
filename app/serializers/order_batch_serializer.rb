class OrderBatchSerializer < ActiveModel::Serializer
  attributes :id
  has_many :order_tickets, serializer: OrderTicketSerializer
end
