import { firebaseApp } from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'

const db = firebase.firestore(firebaseApp)

export const addDocument = async(collection, data) => {
  const result = {
    statusResponse: false,
    data: null,
    error: null
  }
  try {
    const response = await db.collection(collection).add(data)
    result.data = { id: response.id}
    result.statusResponse = true
  } catch (error) {
    result.error = error
  }
  return result
}