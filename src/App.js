import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { PetProvider } from './components/context/PetContext'
//components
import ModalPet from './components/ModalPet'
import PetList from './components/PetList'

const App = () => {
  return (
    <PetProvider>
    <Container>
      <Row className="justify-content-md-center mt-5">
        <h1>Your Pets Here!!!</h1>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <ModalPet 
        title="Add A New Pet"
        textButton="Add A New Pet" 
        variantButton="dark"
        />
      </Row>
      <Row className="mt-5">
        <PetList />
      </Row>
    </Container>
    </PetProvider>
  );
}

export default App;
