import { size } from 'lodash'
import React, { useState, useEffect } from 'react'
import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import ModalPet from './components/ModalPet'
import { getCollection, addDocument } from './utils/actions';

const App = () => {
  const [ pets, setPets ] = useState([])
  const [ pet, setPet ] = useState({
    name: "",
    type: "",
    breed: "",
    birthDate: "",
    ownerName: "",
    ownerPhone: "",
    ownerAddress: "",
    ownerEmail: ""
  })
  const [ error, setError ] = useState(null)

  useEffect(() => {
    (async () => {
      const result = await getCollection("pets")
      if (result.statusResponse) {
        setPets(result.data)
      }
    })()
  }, [])

  const handleAddPet = async (e) => {
    e.preventDefault()

    const result = await addDocument("pets", pet)

    if(result.statusResponse) {
      setError(result.error)
      return
    }
    console.log(pet)
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

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <h1>Your Pets Here!!!</h1>
      </Row>
      {/* <ModalPet 
        title="Add a new Pet"
      /> */}
      <Form onSubmit={handleAddPet}>
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
          <Button type="submit">Save changes</Button>
        </Row> 
        </Form>
      {/* <div>
        {size(pets) === 0 ? (
              <li className="list-group-item text-center">without pets... Add your first Pet</li>
            ) : (
              <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Typo</th>
              <th scope="col">Breed</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Owner Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
              <tbody>
              {pets.map((pet) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{pet.name}</td>
                  <td>{pet.typo}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.birthDate}</td>
                  <td>{pet.ownerName}</td>
                  <td>{pet.ownerPhone}</td>
                  <td>{pet.ownerAddress}</td>
                  <td>{pet.ownerEmail}</td>
                </tr>
              ))}
              </tbody>
            </table>
        )}
      </div> */}
    </Container>
  );
}

export default App;
