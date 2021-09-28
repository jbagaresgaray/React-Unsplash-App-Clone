import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function PhotoDetailsScreen() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div className="PhotoDetailsScreen">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PhotoDetailsScreen;
