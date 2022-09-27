import {useState} from "react"
import {useNavigate} from "react-router-dom"
const OrderForm = ({id, onOrder})=>{
    const [numCases, setNumCases] = useState(0);
    const navigator = useNavigate();
    const onSubmit = (e)=>{
        e.preventDefault();
        if(numCases < 0){
            alert("You cannot order a negative number of cases")
        }
        //trigger the ordering logic itself
        
        onOrder(id, numCases);
        alert(`You have successfully ordered ${numCases}`);
        
        //clear out the form
        setNumCases(0);
        //navigate to the previous page
        navigator(-1);
    };
    return(
        <form onSubmit = {onSubmit}>
            <div class = "form-control">
                <label>
                    Enter nmber of cases to order here
                <input type = "number" name = "case amt" value = {numCases}
                onChange = {(e)=>{setNumCases(e.target.value)}}/>
                </label>
                <input type = "submit" value = "place order"/>

            </div>
        </form>
    )
};
export default OrderForm