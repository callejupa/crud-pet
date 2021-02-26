import { size } from 'lodash'
import React, { useContext } from 'react'
import { PetContext } from './context/PetContext'
import { Button } from 'react-bootstrap'

 const PetList = () => {
  const [pets] = useContext(PetContext)

  if(size(pets) === 0) {
    return (<li className="list-group-item text-center">Without pets... Add your first Pet</li>)
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
                <tr>
                  <td>{pet.name}</td>
                  <td>{pet.type}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.birthDate}</td>
                  <td>{pet.ownerName}</td>
                  <td>{pet.ownerPhone}</td>
                  <td>{pet.ownerAddress}</td>
                  <td>{pet.ownerEmail}</td>
                  <td>
                    <Button variant="info">Edit</Button>
                  </td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
    </div>
  )
}

export default PetList