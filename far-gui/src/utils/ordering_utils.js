
import ApiService from "./fetch"
import axios from "axios"
const OrderingUtils = ()=>{
    const ViewOrders = (setOrders)=>{
        const url = 'http://localhost:3000/orders/review';
        const fetcher = ApiService();
        fetcher.get(url).then(response=>{setOrders(response.data)})
        .catch(error=>{console.log(error)});
    };
    return {ViewOrders}
};
export default OrderingUtils