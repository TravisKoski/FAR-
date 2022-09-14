import ItemList from "../components/inventory_audit/inventory_list"
import ApiService from "../utils/fetch";
import {useState, useEffect} from "react"
const ItemAudit = () =>{
    const[items, setItems] = useState([]);
    //below function calls the index method from backend
    const fetchItems = () =>{
        const fetcher = ApiService();
        const getAllItemsUrl = "http://localhost:3000/items";
        fetcher.get(getAllItemsUrl)
        .then(response => {setItems(response.data); console.log(response.data)})
        .catch(error =>{console.log(error)});
        
    }
    useEffect(()=>{
        fetchItems();
        console.log(items)
    },[])
    return(
    <ItemList/>
    )
};
export default ItemAudit;