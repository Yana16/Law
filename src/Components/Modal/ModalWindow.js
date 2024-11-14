import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputMask from "react-input-mask";

function ModalWindow() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [telephone, setTelephone] = useState();
  const [comment, setComment] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Запитати спеціаліста
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Форма запиту</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Ім'я</Form.Label>
            <Form.Control
              className="form-control-bg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Ім'я"
            />
          </Form.Group>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Номер телефону</Form.Label>
              <Form.Control
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                type="tel"
                as={InputMask}
                mask="+38 (999)-999-999"
                placeholder="+38 (999)-999-999"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Питання</Form.Label>
              <Form.Control
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" type="submit" onClick={handleClose}>
            Надіслати
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;
