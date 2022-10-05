import OrderingUtils from "../utils/ordering_utils"
import {useState, useEffect} from "react"
const OrderManagement = ()=>{
    const [orders, setOrders] = useState([]);
    const apiServices = OrderingUtils();
    useEffect(()=>{
        apiServices.ViewOrders(setOrders);
        
    },[]);
    console.log(orders);

    return(
        <h1>order batches can be reviewed here</h1>
    )
}
export default OrderManagement