import { initializeApp } from 'firebase/app'
import { getAuth, signInAnonymously } from 'firebase/auth'
import { getFirestore, addDoc, collection, terminate } from 'firebase/firestore'
import { open } from 'fs/promises'

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

const fileName = './restaurants.json'
const fileHandle = await open(fileName, 'r')
const content = JSON.parse(await fileHandle.readFile('utf-8'))
fileHandle.close()

auth.onAuthStateChanged(async (user) => {
  if (user) {
    const restaurants = [...Object.values(content)]
    let promises = []
    const restaurantCollection = collection(db, 'restaurant')
    restaurants.forEach((restaurant) => {
      console.log('inserting: ' + restaurant.name)
      promises.push(addDoc(restaurantCollection, restaurant))
    })
    await Promise.all(promises)
    console.log('Last restaurant was inserted successfully')
    await terminate(db)
  } else {
    console.log('no user')
  }
})
