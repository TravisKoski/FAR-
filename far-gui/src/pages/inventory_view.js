import CategoryFilter from "../components/inventory_audit/product_category_filter"
import ApiService from "../utils/fetch";
import ProductList from "../components/inventory_audit/product_list";
import {useState, useEffect} from "react"
import styles from "../custom.module.css"

const ItemView = () =>{
    const[items, setItems] = useState([]);
    const [categoryToView, setCategoryToView] = useState("dry grocery");
    //below function calls the index method from backend
    const fetchItems = () =>{
        const fetcher = ApiService();
        const getAllItemsUrl = `http://localhost:3000/items/find_by_category/${categoryToView}`;
        fetcher.get(getAllItemsUrl)
        .then(response => {setItems(response.data); console.log(response.data)})
        .catch(error =>{console.log(error)});
        
    }
    useEffect(()=>{
        fetchItems();
    },[categoryToView])
    return(
        <div class = {styles.item_list_page}>
    <CategoryFilter filter = {categoryToView} setFilter = {setCategoryToView}/>
    <div class = {styles.item_list_table}>
    <ProductList  products = {items}/>
    </div>
    </div>
    )
};
export default ItemView;