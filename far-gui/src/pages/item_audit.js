/* This page is where the user of the system can adjust an Items PI value, as well as manually
order it*/
import InventoryAuditUtils from "../utils/item_audit_utils"
import {useState} from "react"
import {useParams} from "react-router-dom"

const ItemAudit = () => {
    const {id} = useParams();
    console.log(id);
    const backendServices = InventoryAuditUtils();
    const [currentItem, setCurrentItem] = useState({});
    //get item from backend
    backendServices.fetchCurrentItem(id, setCurrentItem);
    console.log(currentItem);
    return(
        <h1>Item audit tools here</h1>
    )
}
export default ItemAudit