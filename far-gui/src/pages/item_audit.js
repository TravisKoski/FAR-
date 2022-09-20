/* This page is where the user of the system can adjust an Items PI value, as well as manually
order it*/
import InventoryAuditUtils from "../utils/item_audit_utils"
import {useState} from "react"
import {useParams} from "react-router-dom"

const ItemAudit = () => {
    let {itemId} = useParams();
    let itemIdValue = itemId.id
    const backendServices = InventoryAuditUtils();
    const [currentItem, setCurrentItem] = useState(null);
    //get item from backend
    backendServices.fetchCurrentItem(itemIdValue, setCurrentItem);
    console.log(currentItem);
    return(
        <h1>Item audit tools here</h1>
    )
}
export default ItemAudit