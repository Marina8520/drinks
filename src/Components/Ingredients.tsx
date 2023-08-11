import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";


const Ingredients = (id: any) => {

   // console.log('id>>', `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.id}`) ;


    const [ingredients, setIngredients] = useState<string[]>([]);

    async function fetchIngredients(id: {id: string }) { 
        
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.id}`, {});
          
            console.log(ingredients);
            setIngredients( [...ingredients, response.data.drinks[0].strIngredient1 ] ); 
                
               
          
       

    }

    useEffect( () => {
        fetchIngredients(id); }
    );


return (
    <>
    <Container>
        <Row>
        <Col>{ingredients}</Col>
        </Row>
    </Container>
    </>
)

}

export default Ingredients;