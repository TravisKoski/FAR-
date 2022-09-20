import {useState, useEffect} from "react"
const ItemAdjustmentForm = ({currentItem}) => {
    const originalPI = currentItem.PI;
    const [piChanged, setPiChanged] = useState(false);
    const [currentPi, setCurrentPi] = useState(0);
    console.log(`current pi: ${currentPi}`);
    useEffect(()=>{
        setCurrentPi(originalPI);
    },[])
    
return(
    <form>
        <label>
            PI:
            <input name = "pi value" value = {currentPi}
            type = "number" onChange = {(e)=>(setCurrentPi(e.target.value))}/>
        </label>
    </form>
)

};
export default ItemAdjustmentForm
