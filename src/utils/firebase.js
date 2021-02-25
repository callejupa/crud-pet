import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBz2-f3htR4cmjnV5JBts7rzzmDWvVyPGk",
  authDomain: "crud-pets.firebaseapp.com",
  projectId: "crud-pets",
  storageBucket: "crud-pets.appspot.com",
  messagingSenderId: "356520929768",
  appId: "1:356520929768:web:90517c95f407e75a0a9c5d"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);