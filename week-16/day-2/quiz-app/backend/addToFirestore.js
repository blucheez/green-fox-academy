// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection, terminate } from 'firebase/firestore'
import { open } from 'fs/promises'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbWbWk5XuJAmJiIcfVRD7DoiTuYaEPUnA',
  authDomain: 'quiz-app-d9470.firebaseapp.com',
  projectId: 'quiz-app-d9470',
  storageBucket: 'quiz-app-d9470.appspot.com',
  messagingSenderId: '843625103917',
  appId: '1:843625103917:web:cc8eb2436803f0998b6ea4',
  measurementId: 'G-KNQHFEN439',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()

const fileName = './quiz_app.json'
const fileHandle = await open(fileName, 'r')
const content = JSON.parse(await fileHandle.readFile('utf-8'))
fileHandle.close()

const questions = [...Object.values(content)][0]
console.log(questions);
let promises = []
const questionsCollection = collection(db, 'questions')
questions.forEach((question) => {
  console.log('inserting: ' + question.question)
  promises.push(addDoc(questionsCollection, question))
})
await Promise.all(promises)
console.log('Last question was inserted successfully')
await terminate(db)
