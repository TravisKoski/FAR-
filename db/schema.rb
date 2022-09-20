# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_20_210221) do
  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.integer "casePack"
    t.float "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "PI"
  end

  create_table "order_batches", force: :cascade do |t|
    t.string "category"
    t.boolean "active"
    t.string "from"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_tickets", force: :cascade do |t|
    t.integer "item_id", null: false
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "order_batch_id", null:false
    t.index ["item_id"], name: "index_order_tickets_on_item_id"
    t.index ["order_batch_id"], name: "index_order_tickets_on_order_batch_id"
  end

  add_foreign_key "order_tickets", "items"
  add_foreign_key "order_tickets", "order_batches"
end
