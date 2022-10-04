import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import styles from "../../custom.module.css"
const ItemAdjustmentForm = ({currentItem, onUpdate}) => {
    const originalPI = currentItem.PI
    const [piChanged, setPiChanged] = useState(false);
    const [currentPi, setCurrentPi] = useState(originalPI);
    const navigator = useNavigate();
    console.log(`style: ${styles.item_audit_form}`);
    //when the submit button is hit, send the update request to the backend
    const onSubmit = (e)=>{
        e.preventDefault();
        //dont allow a negative pi value
        if(currentPi < 0){
            alert("You cannot submit a negative pi value");
        }
        onUpdate(currentItem.id, currentPi);
        alert(`You have changed the current PI to ${currentPi}`);
        //go to the last page
        navigator(-1);
        


    }
    useEffect(()=>{
        
        setCurrentPi(originalPI);
    },[]);
    
    
return(
    <form className={styles.item_audit_form} onSubmit={onSubmit}>
        <div>
        <label>
            PI (currently {originalPI}):
            <input name = "pi value" value = {currentPi}
            type = "number" onChange = {(e)=>(setCurrentPi(e.target.value))}/>
        </label>
        <input type="submit" value = "Update PI"/>
        </div>
        
    </form>
)

};
export default ItemAdjustmentForm
