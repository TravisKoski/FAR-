class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items
  end
  def by_category
    items = Item.find_by(category: params[:category])
    render json: items
  end

  def show
    item = Item.find(params[:id])
    render json: item
  end

  def create
    name = params[:name]
    category = params[:category]
    casePack = params[:casePack].to_i
    price = params[:price].to_f
    new_item = Item.create!(name:name,category:category,price:price, casePack: casePack )
    render json new_item
  end

  #changes the PI of an item
  def update_PI
    target_item = Item.find_by_id(params[:id])
    target_item.update!(PI: params[:new_qty])
    render json: target_item
  end

  def destroy
    target_item = Item.find_by_id(params[:id])
    all_items = Item.all
    target_item.destroy!
    render json: all_items
  end
end
