import { Button, Card } from "react-bootstrap";
import { product } from "../data/product";
import Products from "./Products";
import { IProduct } from "../models";
import { useState } from "react";
import axios from "axios";

interface ProductProps {
    product: IProduct
}

function CardComponent ({product}: ProductProps) {



    return (
        <Card style={{width: '15rem'}}>
            <Card.Img variant='top' src={product.strDrinkThumb}  className='fluid rounded' alt={product.strDrink}  />
            <Card.Body>
                <Card.Title>{product.strDrink}</Card.Title>
                <Card.Text>{`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${product.idDrink}`}</Card.Text>
                <Button variant="dark">Подробнее</Button>
            </Card.Body>


        </Card>
    )
}

export default CardComponent;