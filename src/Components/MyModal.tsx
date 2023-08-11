import React from 'react';
import { Toast, ToastContainer, ToastHeader } from 'react-bootstrap';
import mylogo from '../mylogo.png';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const MyModal = (  ) => {


    const [show, setShow] = useState<boolean>();
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);

return (
    <>
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

export default MyModal;