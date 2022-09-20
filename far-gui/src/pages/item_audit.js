/* This page is where the user of the system can adjust an Items PI value, as well as manually
order it*/
import InventoryAuditUtils from "../utils/item_audit_utils"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Table} from "react-bootstrap"

const ItemAudit = () => {
    const {id} = useParams();
    const backendServices = InventoryAuditUtils();
    const [currentItem, setCurrentItem] = useState({});
    //get item from backend
    useEffect(() =>{
        backendServices.fetchCurrentItem(id, setCurrentItem);

    }, [])
    
    return(
        <>
        <h1>options for {currentItem.name} below</h1>
        </>

    
    )
}
export default ItemAudit