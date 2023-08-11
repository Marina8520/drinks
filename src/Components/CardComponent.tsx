import { Button, Card } from "react-bootstrap";
import { IProduct } from "../models";
import Ingredients from "./Ingredients";

interface ProductProps {
    product: IProduct
}

function CardComponent ({product}: ProductProps, ingredients: string) {

    return (
        <Card style={{width: '15rem'}}>
            <Card.Img variant='top' src={product.strDrinkThumb}  className='fluid rounded' alt={product.strDrink} />
            <Card.Body>
                <Card.Title>{product.strDrink}</Card.Title>
                <Card.Text><Ingredients id={product.idDrink}/>{product.idDrink}</Card.Text>
                <Button variant="dark">Подробнее</Button>
            </Card.Body>


        </Card>
    )
}

export default CardComponent;