import Table from 'react-bootstrap/Table';
import {useNavigate} from "react-router-dom"
import {Button} from "react-bootstrap"



const ProductList = (props) =>{
    let products = [props.products].flat();
    let navigator = useNavigate();
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>item description</th>
                    <th>item category</th>
                    <th>item price</th>
                    <th>case quantity</th>
                    <th>PI</th>
                    <th>Audit options</th>

                </tr>

            </thead>
            <tbody>

                {products[0]!==null && products.map((product)=>(
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.casePack}</td>
                        <td> {product.PI}</td>
                        <td><Button onClick = {()=>{navigator(`/item_audit/${product.id}`)}}>Audit this item</Button></td>
                    </tr>
                ))}               
            </tbody>
        </Table>
        

    )
};
export default ProductList