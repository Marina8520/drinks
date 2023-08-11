import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';

function FormComponent() {
    return (
        <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Запрос..."
          className="me-2"
          aria-label="Найти"
        />
        <Button variant="outline-success">Найти</Button>
      </Form>
    )
}

export default FormComponent;