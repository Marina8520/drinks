import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { IProduct } from "../models";
import Ingredients from "./Ingredients";
import MyModal from "./MyModal";
import { Modal } from 'react-bootstrap';

interface ProductProps {
    product: IProduct
}




function CardComponent ({product}: ProductProps, ingredients: string) {

    const [show, setShow] = useState<boolean>();
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);



    return (
        <>
        <Card style={{width: '15rem'}}>
            <Card.Img variant='top' src={product.strDrinkThumb}  className='fluid rounded' alt={product.strDrink} />
            <Card.Body>
                <Card.Title>{product.strDrink}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ингредиенты</Card.Subtitle>
                <Card.Body className="h-30">
                    <Ingredients id={product.idDrink}/>
                </Card.Body>
                <Button variant="dark" onClick={handleShow}>Подробнее</Button>
            </Card.Body>


        </Card>

        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Рецепт коктеля</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Здесь должен быть рецепт
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='dark' onClick={handleClose}>Закрыть</Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}

export default CardComponent;