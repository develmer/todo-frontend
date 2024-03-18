import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const DutyUpdate = (props: any) => {
  const [name, setName] = useState(props.name);
  const [id, setId] = useState(props.id);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `http://localhost:5000/api/v1/duties/${id}`;
    await axios
      .patch(url, { name })
      .then((response) => {
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        <i className="bi bi-pencil p-1"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Duty</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="updateForm"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form-group">
              <label htmlFor="id">Id</label>
              <input
                type="text"
                className="form-control-plaintext"
                id="id"
                value={id}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary" form="updateForm">
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
