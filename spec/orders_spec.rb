require "rails_helper"
RSpec.describe "orders", type: :request do
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
end