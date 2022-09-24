require "rails_helper"
RSpec.describe "Items", type: :request do
    describe "GET /items/all" do
        it "Returns with an http ok response" do
            get "/items"

            expect(response.status).to eq(200)
        end
    end
    describe "Create new item" do
        scenario "Correct item parameters" do
            post "/items",params: {name:"some dairy item",
        category: "perishable", price: 0.39, casePack:12}

            expect(response.status).to eq(200)
            #assert that the response is in fact the new item
            response_data = JSON.parse(response.body).deep_symbolize_keys
            expect(response_data[:name]).to eq("some dairy item")
            expect(response_data[:category]).to eq("perishable")
            expect(response_data[:price]).to eq(0.39)
            expect(response_data[:casePack]).to eq(12)
        end
        scenario "incorrect/incomplete parameters return a 422" do
            post "/items"
            expect(response.status).to eq(422)
        end
    end
    describe "update item PI" do
        #create a dummy item to update
        let(:item) { Item.create(name: "test dry item", category: "dry grocery", price:12.99, casePack:24)}
        scenario "Update to a valid PI" do
            put "/items/#{item.id}/adjust_PI", params:{new_qty: 12}
            expect(response.status).to eq(200)
            json= JSON.parse(response.body).deep_symbolize_keys
            expect(json[:PI]).to eq(12)
        end
        scenario "Updating to a non number PI should not be allowed" do
            put "/items/#{item.id}/adjust_PI", params:{new_qty: "hello"}
            #response will still be valid
            expect(response.status).to eq(200)
            json = JSON.parse(response.body).deep_symbolize_keys
            #value of PI should be null
            expect(json[:pi]).to eq(nil)
        end


    end

end