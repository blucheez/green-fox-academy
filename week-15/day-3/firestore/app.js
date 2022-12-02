import { initializeApp } from 'firebase/app'
import { getAuth, signInAnonymously } from 'firebase/auth'
import { getFirestore, doc, getDoc, getDocs, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCaxZTQbf6Kuk5WbNo70swj8yMC-GlJBNY',
  authDomain: 'greenfox-dbe41.firebaseapp.com',
  projectId: 'greenfox-dbe41',
  storageBucket: 'greenfox-dbe41.appspot.com',
  messagingSenderId: '735299832370',
  appId: '1:735299832370:web:bf68652a66de66fdf60a2b',
}

initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

await signInAnonymously(auth)

const querySnapshot = await getDocs(collection(db, 'restaurant'))
querySnapshot.forEach((doc) => {
  console.log(doc.id, ' => ', doc.data())
})
