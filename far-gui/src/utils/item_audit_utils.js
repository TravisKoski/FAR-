import ApiService from "./fetch";
const InventoryAuditUtils = ()=>{
    //loads a single item by id form the backend
    const fetchCurrentItem = (id, setItem) =>{
        const fetcher = ApiService();
        const url = `http://localhost:3000/items/${id}`;
        fetcher.get(url).then(response => setItem(response.data))
        .catch(error=>{console.log(error)})

    };
    //Does a backend update on the PI of the item
    const adjustPI = (id, newPI) =>{
        const fetcher = ApiService();
        const url = `http://localhost:3000/items/${id}/adjust_PI`;
        fetcher.put(url, {new_qty: newPI});
    };

    return({fetchCurrentItem, adjustPI})

}
export default InventoryAuditUtils