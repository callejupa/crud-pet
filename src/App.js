import React from 'react'
import { Container, Row } from 'react-bootstrap'
//import ModalPet from './components/ModalPet'
import { PetProvider } from './components/context/PetContext'
//components
import PetList from './components/PetList'
import FormPet from './components/FormPet'

const App = () => {
  return (
    <PetProvider>
    <Container>
      <Row className="justify-content-md-center mt-5">
        <h1>Your Pets Here!!!</h1>
      </Row>
      {/* <ModalPet 
        title="Add a new Pet"
      /> */}
      {/* <FormPet /> */}
        <PetList />
    </Container>
    </PetProvider>
  );
}

export default App;
