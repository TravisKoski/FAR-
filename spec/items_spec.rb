require "rails_helper"
RSpec.describe "Items", type: :request do
    describe "GET /items/all" do
        it "Returns with an http ok response" do
            get "/items"

            expect(response.status).to eq(200)
        end
    end
end