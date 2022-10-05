class OrderTicketSerializer < ActiveModel::Serializer
  attributes :id, :item, :quantity
end
