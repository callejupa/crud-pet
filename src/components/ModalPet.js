import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import FormPet from './FormPet'

const ModalPet = ({
  title,
  textButton,
  variantButton,
  editMode = false,
  dataPet = {}
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
      <div>
      <Button variant={variantButton} onClick={handleShow}>
        {textButton}
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title centered>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormPet 
          edit={editMode}
          dataPetEdit={dataPet}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
      </div>
    )
}

export default ModalPet
