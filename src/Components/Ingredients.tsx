import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";


const Ingredients = (id: any) => {

   // console.log('id>>', `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.id}`) ;


    const [ingredient1, setIngredient1] = useState();
    const [ingredient2, setIngredient2] = useState();
    const [ingredient3, setIngredient3] = useState();
    const [ingredient4, setIngredient4] = useState();



    async function fetchIngredients(id: {id: string }) {

            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.id}`, {});


            setIngredient1( response.data.drinks[0].strIngredient1 );
            setIngredient2( response.data.drinks[0].strIngredient2 );
            setIngredient3( response.data.drinks[0].strIngredient3 );
            setIngredient4( response.data.drinks[0].strIngredient4 );





    }

    useEffect( () => {
        fetchIngredients(id); }
    );


return (
    <>
    <Container>
        <Row>
        <Col>{ingredient1}</Col>
        </Row>
        <Row>
        <Col>{ingredient2}</Col>
        </Row>
        <Row>
        <Col>....</Col>
        </Row>
    </Container>
    </>
)

}

export default Ingredients;