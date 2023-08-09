import { Container, Col, Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { product } from "../data/product";
import { useEffect, useState } from "react";
import { IProduct } from "../models";
import axios from "axios";


function Products () {
 /*
    const [product,setProduct] = useState<IProduct[]>([]);

   async function fetchProducts() {
    const response = await axios.get<IProduct[]>("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
   setProduct({response}.response.data)
    console.log(typeof({response}.response.data))
   }

    useEffect(() => {
        fetchProducts()
    },[])
*/
    return (
        <Container style={{paddingTop:'2rem'}} >

            <Row xs={10}>

                { product.map(
                    prod =>  <Col>
                                 <CardComponent  product = {prod} key={prod.idDrink}/>
                             </Col>
                   )
                }

            </Row>

        </Container>
    )
}

export default Products;