import {useState} from "react"
const OrderForm = ({id, onOrder})=>{
    const [numCases, setNumCases] = useState(0)
    const onSubmit = (e)=>{
        e.preventDefault();
        if(numCases > 0){
            alert("You cannot order a negative number of cases")
        }
        //trigger the ordering logic itself
        onOrder({item_id:id, case_count:numCases});
        //clear out the form
        setNumCases(0);
    };
    return(
        <form>
            <div class = "form-control">
                <label>
                    Enter nmber of cases to order here
                <input type = "number" name = "case amt" value = {numCases}
                onChange = {(e)=>{setNumCases(e.target.value)}}/>
                </label>

            </div>
        </form>
    )
};
export default OrderForm