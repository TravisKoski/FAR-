class OrdersController < ApplicationController

  def add_item
    item_to_add = Item.find_by_id(params[:item_id])
    number_of_cases = params[:case_count].to_i
    #TODO:
    #1. Check if an order is already open under the item category and
    #2: If Not, open one with the correct category
    #3. See if the item has already been ordered by seeing if the order tiket has already been made
    #4. IF yes, update it. If not, create the ticket and add it to the order
  end

  def review
  end

  def close
  end

  def transmit
  end
end
