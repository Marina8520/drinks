import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, Container, NavDropdown, Form} from 'react-bootstrap';
import mylogo from '../mylogo.png';
import FormComponent from './FormComponent';
import Image from 'react-bootstrap/Image';

function Navigation() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark'>
         <Container>
           <Navbar.Brand href="#home"><Image src={mylogo} alt='Best drinks' width={30} height={30} roundedCircle /></Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
               <Nav.Link href="#home">Напитки</Nav.Link>
               <Nav.Link href="#link">Добавить рецепт</Nav.Link>
               <NavDropdown title="Клуб" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">Посты</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">
                   Конкурсы
                 </NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action/3.4">
                   Авторы
                 </NavDropdown.Item>
               </NavDropdown>
             </Nav>
             <FormComponent/>
           </Navbar.Collapse>
         </Container>
       </Navbar>

    </>
    )
}

export default Navigation;