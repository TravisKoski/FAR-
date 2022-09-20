require "test_helper"

class OrdersControllerTest < ActionDispatch::IntegrationTest
  test "should get open" do
    get orders_open_url
    assert_response :success
  end

  test "should get add_item" do
    get orders_add_item_url
    assert_response :success
  end

  test "should get review" do
    get orders_review_url
    assert_response :success
  end

  test "should get close" do
    get orders_close_url
    assert_response :success
  end

  test "should get transmit" do
    get orders_transmit_url
    assert_response :success
  end
end
