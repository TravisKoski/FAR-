/* This page is where the user of the system can adjust an Items PI value, as well as manually
order it*/
import InventoryAuditUtils from "../utils/item_audit_utils"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Table} from "react-bootstrap"
import ItemAdjustmentForm from "../components/inventory_audit/adjustment_form"

const ItemAudit = () => {
    const {id} = useParams();
    const services = InventoryAuditUtils();
    const [currentItem, setCurrentItem] = useState({});
    //following line signals that the PI has been changed, which will be used to reload from the backend
    

    //get item from backend
    useEffect(() =>{
        services.fetchCurrentItem(id, setCurrentItem);

    }, [])
    
    return(
        <>
        <h1>options for {currentItem.name} below</h1>
        <ItemAdjustmentForm currentItem={currentItem}/>
        
        </>

    
    )
}
export default ItemAudit