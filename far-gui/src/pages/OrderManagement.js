import OrderingUtils from "../utils/ordering_utils"
import {useState, useEffect} from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const OrderManagement = ()=>{
    const [orders, setOrders] = useState([]);
    const apiServices = OrderingUtils();
    useEffect(()=>{
        apiServices.ViewOrders(setOrders);
        
    },[]);


    return(
    <>
        <h1>order batches can be reviewed here</h1>
        {orders.map(order=>{
            const tickets = order.order_tickets;
            console.log(tickets);
            return(
            <DropdownButton id="dropdown-item-button" title={order.category}>
                {tickets.map(ticket=>(
                    <Dropdown.ItemText> {`name: ${ticket.item.name}, quantity ordered: ${ticket.quantity}`}</Dropdown.ItemText>
                ))}
          </DropdownButton>
        )})}
        </>
    )
}
export default OrderManagement