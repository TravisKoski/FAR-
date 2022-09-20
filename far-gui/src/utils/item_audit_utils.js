import ApiService from "./fetch";
const InventoryAuditUtils = ()=>{
    const fetchCurrentItem = (id, setItem) =>{
        const fetcher = ApiService();
        const url = `http://localhost:3000/items/${id}`;
        fetcher.get(url).then(response => setItem(response.json))
        .catch(error=>{console.log(error)})

    };
    const adjustPI = (id, newPI) =>{
        const fetcher = ApiService();
        const url = `http://localhost:3000/items/${id}/adjust_PI`
        fetcher.put(url, {PI:newPI})
    };

    return({fetchCurrentItem, adjustPI})

}
export default InventoryAuditUtils