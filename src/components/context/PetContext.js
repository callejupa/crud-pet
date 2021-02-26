import React, { useState, useEffect, createContext } from 'react'
import { getCollection } from '../../utils/actions';

export const PetContext = createContext()

export const PetProvider = props => {
  const [pets, setPets] = useState([])

  // const [pets, setPets] = useState({
  //   name: "",
  //   type: "",
  //   breed: "",
  //   birthDate: "",
  //   ownerName: "",
  //   ownerPhone: "",
  //   ownerAddress: "",
  //   ownerEmail: ""
  // })

  useEffect(() => {
    (async () => {
      const result = await getCollection("pets")
      if (result.statusResponse) {
        setPets(result.data)
      }
    })()
  }, [])

  return (
    <PetContext.Provider value={[pets, setPets]}>
      {props.children}
    </PetContext.Provider>
  )
}