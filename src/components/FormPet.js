import React, { useContext, useState } from 'react'
import { Row, Form, Button, Col } from 'react-bootstrap'
import { addDocument, updateDocument } from '../utils/actions'
import { PetContext } from './context/PetContext'

const FormPet = ({
  isEdit = false,
  dataPetEdit
}) => {
  const [ pets, setPets] = useContext(PetContext)
  const [ error, setError ] = useState(null)
  const [ pet, setPet ] = useState({
    name: isEdit ? dataPetEdit.name : "",
    type: isEdit ? dataPetEdit.type : "",
    breed: isEdit ? dataPetEdit.breed : "",
    birthDate: isEdit ? dataPetEdit.birthDate : "",
    ownerName: isEdit ? dataPetEdit.ownerName : "",
    ownerPhone: isEdit ? dataPetEdit.ownerPhone : "",
    ownerAddress: isEdit ? dataPetEdit.ownerAddress : "",
    ownerEmail: isEdit ? dataPetEdit.ownerEmail : ""
  })

  const handleAddPet = async (e) => {
    e.preventDefault()

    const result = await addDocument("pets", pet)

    if(!result.statusResponse) {
      setError(result.error)
      return
    }
    setPets([ ...pets, { ...pet, id: result.data.id, }])
    setPet({
      id: "",
      name: "",
      type: "",
      breed: "",
      birthDate: "",
      ownerName: "",
      ownerPhone: "",
      ownerAddress: "",
      ownerEmail: ""
    })
  }

  const handleSavePet = async(e) => {
    e.preventDefault()

    const result = await updateDocument("pets", dataPetEdit.id, pet)
    if (!result.statusResponse) {
      setError(result.error)
      return
    }

    const editedPets = pets.map(item => item.id === dataPetEdit.id ? { id: dataPetEdit.id, ...pet} : item)
    setPets(editedPets)
    setPet({
      id: "",
      name: "",
      type: "",
      breed: "",
      birthDate: "",
      ownerName: "",
      ownerPhone: "",
      ownerAddress: "",
      ownerEmail: ""
    })
  }
    return (
      <Form onSubmit={!isEdit ? handleAddPet : handleSavePet}>
      { error && <span className="text-danger">{error}</span>}
        <Row className="justify-content-md-center mt-5">
          <h3>Pet Information</h3>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control 
              placeholder="Enter Pet Name"
              value={pet.name}
              onChange={(text) => setPet({ ...pet, name: text.target.value})}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Type</Form.Label>
              <Form.Control 
              placeholder="Enter Type of Pet"
              value={pet.type}
              onChange={(text) => setPet({ ...pet, type: text.target.value})} 
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Breed</Form.Label>
              <Form.Control 
              placeholder="Enter the breed of Pet"
              value={pet.breed}
              onChange={(text) => setPet({ ...pet, breed: text.target.value})} 
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control 
              placeholder="Enter Type of Pet"
              value={pet.birthDate}
              onChange={(text) => setPet({ ...pet, birthDate: text.target.value})}  />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-5">
          <h3>Owner Information</h3>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Owner Name</Form.Label>
              <Form.Control 
              placeholder="Enter the name of the owner"
              value={pet.ownerName}
              onChange={(text) => setPet({ ...pet, ownerName: text.target.value})} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Owner Phone</Form.Label>
              <Form.Control
               placeholder="Enter the phone"
               value={pet.ownerPhone}
               onChange={(text) => setPet({ ...pet, ownerPhone: text.target.value})} 
              />
            </Form.Group>
          </Col>
        </Row> 
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Owner Address</Form.Label>
              <Form.Control
               placeholder="Enter the address of the owner"
               value={pet.ownerAddress}
               onChange={(text) => setPet({ ...pet, ownerAddress: text.target.value})} 
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Owner Email</Form.Label>
              <Form.Control 
              placeholder="Enter the Email"
              value={pet.ownerEmail}
              onChange={(text) => setPet({ ...pet, ownerEmail: text.target.value})} 
            />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-5">
          <Button type="submit">
            {isEdit ? "Save" : "Add"}
          </Button>
        </Row> 
        </Form>
    )
}

export default FormPet
