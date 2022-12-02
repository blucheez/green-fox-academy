// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection, terminate } from 'firebase/firestore'
import { open } from 'fs/promises'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBm4zq5WlzgjZc9-3zjBkqy5MizDhnJzbM',
  authDomain: 'reddit-clone-52284.firebaseapp.com',
  projectId: 'reddit-clone-52284',
  storageBucket: 'reddit-clone-52284.appspot.com',
  messagingSenderId: '351311023723',
  appId: '1:351311023723:web:cd5cecf27d190b0300eb2e',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()

const fileName = './MOCK_DATA.json'
const fileHandle = await open(fileName, 'r')
const content = JSON.parse(await fileHandle.readFile('utf-8'))
fileHandle.close()

const posts = [...Object.values(content)][0]
console.log(posts)
let promises = []
const postsCollection = collection(db, 'posts')
posts.forEach((post) => {
  console.log('inserting: ' + post.post)
  promises.push(addDoc(postsCollection, post))
})
await Promise.all(promises)
console.log('Last post was inserted successfully')
await terminate(db)
