import { size } from 'lodash'
import React, { useContext } from 'react'
import { PetContext } from './context/PetContext'
import { Button } from 'react-bootstrap'
//components
import ModalPet from './ModalPet'
import DeleteModal from './DeleteModal'

 const PetList = () => {
  const [pets] = useContext(PetContext)

  if(size(pets) === 0) {
    return (<li className="list-group-item text-center">Loading...</li>)
  }

  return (
    <div>
      <table class="table table-dark">
          <thead>
            <tr>
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
                <tr key={pet.id}>
                  <td>{pet.name}</td>
                  <td>{pet.type}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.birthDate}</td>
                  <td>{pet.ownerName}</td>
                  <td>{pet.ownerPhone}</td>
                  <td>{pet.ownerAddress}</td>
                  <td>{pet.ownerEmail}</td>
                  <td>
                    <ModalPet 
                    title="Edit Pet"
                    textButton="Edit"
                    variantButton="info"
                    editMode 
                    dataPet={pet} />
                  </td>
                  <td>
                    <DeleteModal 
                      title="Delete a Pet"
                      variantButton="danger"
                      textButton="Delete"
                      dataPet={pet}
                    />
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
    </div>
  )
}

export default PetList