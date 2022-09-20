import CategoryFilter from "../components/inventory_audit/product_category_filter"
import ApiService from "../utils/fetch";
import ProductList from "../components/inventory_audit/product_list";
import {useState, useEffect} from "react"

const ItemView = () =>{
    const[items, setItems] = useState([]);
    const [categoryToView, setCategoryToView] = useState("");
    //below function calls the index method from backend
    const fetchItems = () =>{
        const fetcher = ApiService();
        const getAllItemsUrl = `http://localhost:3000/items/${categoryToView}`;
        fetcher.get(getAllItemsUrl)
        .then(response => {setItems(response.data); console.log(response.data)})
        .catch(error =>{console.log(error)});
        
    }
    useEffect(()=>{
        fetchItems();
    },[categoryToView])
    return(
        <>
    <CategoryFilter filter = {categoryToView} setFilter = {setCategoryToView}/>
    <ProductList products = {items}/>
    <></>
    </>
    )
};
export default ItemView;