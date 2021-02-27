import React, { useState, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { deleteDocument } from '../utils/actions';
import { PetContext } from './context/PetContext'

const DeleteModal = ({
  title,
  textButton,
  variantButton,
  dataPet = {}
}) => {
  const [ pets, setPets] = useContext(PetContext)
  const [show, setShow] = useState(false);
  const [ error, setError ] = useState(null)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeletePet = async (idPet) => {
    const result = await deleteDocument("pets", idPet)

    if(!result.statusResponse) {
      setError(result.error)
      return
    }

    const filteredPets = pets.filter(pet => pet.id !== idPet)
    setPets(filteredPets)
  }
  
    return (
      <div>
      <Button variant={variantButton} onClick={handleShow}>
        {textButton}
      </Button>

      <Modal 
        size="lg"
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title centered>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { error && <span className="text-danger">{error}</span>}
          Are you sure to delete a {dataPet.name} pet?
        </Modal.Body>
        <Modal.Footer>
          <Button 
           variant="secondary" 
           onClick={handleClose}
          >
            Cancel
          </Button>
          <Button 
           variant="danger" 
           onClick={() => handleDeletePet(dataPet.id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
}

export default DeleteModal
