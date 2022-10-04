class OrdersController < ApplicationController

  def add_item
    item_to_add = Item.find_by_id(params[:item_id])
    number_of_cases = params[:case_count].to_i
    #TODO:
    #1. Check if an order is already open under the item category
    active_order = OrderBatch.find_by(:category=>item_to_add.category)
    if active_order
      #either update an existing ticket, or create a new one and add it to the order
      order_ticket = OrderTicket.find_by(:item_id=>item_to_add.id)
      if order_ticket
        order_ticket.update!(:quantity=>number_of_cases)
      else
        order_ticket = OrderTicket.create!(:item_id=>item_to_add.id, :order_batch_id=>active_order.id,
        :quantity=>number_of_cases)
      end
      render json: active_order.to_json(:include=>:order_tickets) and return
    end
      #we know that it is the first time ordering this item
      #A new order must be made, and a new order ticket
    new_order = OrderBatch.create!(:category=>item_to_add.category, :from=>"SOLO", :active=>true)
    new_ticket = OrderTicket.create!(:item_id=>item_to_add.id, :order_batch_id=>new_order.id, :quantity=>number_of_cases)
    render json: new_order.to_json(:include=>:order_tickets)
    #TODO, could clean up this code a bit, tb
  end

  #renders all open orders
  def review
    open_orders = OrderBatch.all
    render json: open_orders
  end

  def close

  end

  def transmit
    #iterate through each ticket
    order_batch = OrderBatch.find_by_id(params[:id])
    tickets = order_batch.order_tickets.to_a
    tickets.each do |ticket|
      current_item = Item.find_by_id(ticket.item_id)
      #adjust the pi by case count of item * how many cases were ordered
      case_count = current_item.casePack
      current_PI = current_item.PI
      quantity_ordered = ticket.quantity
      current_item.update(PI: current_PI + case_count*quantity_ordered)
    end
    #close out the order batch
    order_batch.destroy!
    render status: 200

  end
end
