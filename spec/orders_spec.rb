require "rails_helper"
RSpec.describe "orders", type: :request do
    describe "Transmit an open order" do
        #make some example items and order them
        let!(:item1){Item.create(name: "test item1", category: "perishable",price:0, casePack:1, PI: 0)}
        let!(:item2){Item.create(name: "test item2", category: "perishable",price:0, casePack:1, PI:0)}

        it "successfully updates the PI of all items within the order batch" do
            #order the items first
            put "/orders/add_item", params: {item_id: 2, case_count: 2}
            put "/orders/add_item", params: {item_id: 1, case_count: 10}
            put "/orders/1/transmit"
            expect(response.status).to eq(200)
            #Re fetch those items from DB and check of the new PI's are correct
            get "/items/1"
            json = JSON.parse(response.body, symbolize_names: true)
            expect(json[:PI]).to eq(10)
            get "/items/2"
            json = JSON.parse(response.body, symbolize_names: true)
            expect(json[:PI]).to eq(2)

        end
    end
    
    describe "Render open orders" do
        let!(:order) {OrderBatch.create(category: "perishable", active: true, from: "FAR")}
        scenario "Successfully views orders" do
            get "/orders/review"
            expect(response.status).to eq(200)
            json = JSON.parse(response.body, symbolize_names: true)[0]
            expect(json[:category]).to eq("perishable")
            expect(json[:active]).to eq(true)
            expect(json[:from]).to eq("FAR")

            
        end
    end
    describe "Adding an item to an order" do
        let!(:item1){Item.create(name: "test item1", category: "perishable",price:0, casePack:0)}
        let!(:item2){Item.create(name: "test item2", category: "perishable",price:0, casePack:0)}

        scenario "First time the item has been ordered" do
            put "/orders/add_item", params: {item_id: 1, case_count: 11}

            #expect a good response
            expect(response.status).to eq(200)
            json = JSON.parse(response.body, symbolize_names: true)
            #make sure the order ticket is correct
            ticket = json[:order_tickets][0]
            expect(ticket[:item_id]).to eq(1)
            expect(ticket[:quantity]).to eq(11)
        end
        scenario "same item being ordered twice" do
            #order it the first time
            put "/orders/add_item", params: {item_id: 1, case_count: 11}
            #lazily verifying the order batch and order id is correct
            response_1= JSON.parse(response.body, symbolize_names: true)
            ticket = response_1[:order_tickets][0]
            expect(ticket[:order_batch_id]).to eq(1)
            #now order a second time
            put "/orders/add_item", params: {item_id: 1, case_count: 20}
            response_2 = JSON.parse(response.body, symbolize_names: true)
            ticket_2 = response_2[:order_tickets][0]
            #make sure the same ticket was updated
            expect(ticket_2[:order_batch_id]).to eq(ticket[:order_batch_id])
            expect(ticket_2[:item_id]).to eq(ticket[:item_id])


    
        end
    end
    
end