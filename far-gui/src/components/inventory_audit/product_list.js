import Table from 'react-bootstrap/Table';
const ProductList = (props) =>{
    let products = [props.products].flat();
    console.log(products)
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>item description</th>
                    <th>item category</th>
                    <th>item price</th>
                    <th>case quantity</th>
                    <th>PI</th>
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
                    </tr>
                ))}               
            </tbody>
        </Table>
        

    )
};
export default ProductList