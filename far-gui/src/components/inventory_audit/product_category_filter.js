const CategoryFilter = ({filter,setFilter}) =>{
    const onSelect = (e) => {setFilter(e.target.value)};
    return (
        <div>
        <label>Select a category of items to view (dry grocery, frozen, etc..)</label>
        <select value = {filter} onChange = {onSelect}>
            <option value = "dry grocery"> Dry grocery</option>
            <option value = "frozen"> Frozen foods</option>
            <option value = "perishable">Dairy/refrigerated</option>

        </select>
        </div>
    )
};
export default CategoryFilter