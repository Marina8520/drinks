    import { Container, Col, Row } from "react-bootstrap";
import CardComponent from "../Components/CardComponent";
import { useEffect, useState } from "react";
import { IProduct, IData } from "../models";
import axios from "axios";
import { product } from "../data/product";
import Navigation from '../Components/Navigation';




function Products () {
 /*const [product,setProduct] = useState<IProduct[]>([]);

   async function fetchProducts() {
    const response = await axios.get<IData>("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");


    setProduct(response.data.drinks);

   }

    useEffect(() => {
        fetchProducts()
    },[])*/


    return (
        <>
            <Navigation/>
            <Container style={{paddingTop:'2rem'}} >
                <Row xs={10}>

                    {product.map(
                        prod =>  <Col>
                                    <CardComponent  product = {prod} key={prod.idDrink}/>
                                </Col>
                    )
                    }

                </Row>

            </Container>
        </>
    )
}

export default Products;