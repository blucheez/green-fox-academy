import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore'
import express from 'express'
import cors from 'cors'

const firebaseConfig = {
  apiKey: 'AIzaSyCbWbWk5XuJAmJiIcfVRD7DoiTuYaEPUnA',
  authDomain: 'quiz-app-d9470.firebaseapp.com',
  projectId: 'quiz-app-d9470',
  storageBucket: 'quiz-app-d9470.appspot.com',
  messagingSenderId: '843625103917',
  appId: '1:843625103917:web:cc8eb2436803f0998b6ea4',
  measurementId: 'G-KNQHFEN439',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const app = express()

const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/api/game', async (req, res) => {
  const querySnapshot = await getDocs(collection(db, 'questions'))
  let jsonData = []
  querySnapshot.forEach((doc) => {
    jsonData.push(doc.data())
  })
  res.json(jsonData)
})
app.get('/api/questions', async (req, res) => {
  const querySnapshot = await getDocs(collection(db, 'questions'))
  let jsonData = []
  let ids = []
  querySnapshot.forEach((doc) => {
    jsonData.push(doc.data())
    ids.push(doc.id)
  })
  for (let i = 0; i < jsonData.length; i++) {
    jsonData[i].id = ids[i]
  }
  res.json(jsonData)
})
app.post('/api/questions', async (req, res) => {
  const checkCorrect = (a) => {
    if (data.is_correct === a) {
      return true
    } else {
      return false
    }
  }

  const data = req.body
  const newQ = {
    question: data.question,
    answers: [
      {
        answer: data.q1,
        is_correct: checkCorrect('q1'),
      },
      {
        answer: data.q2,
        is_correct: checkCorrect('q2'),
      },
      {
        answer: data.q3,
        is_correct: checkCorrect('q3'),
      },
      {
        answer: data.q4,
        is_correct: checkCorrect('q4'),
      },
    ],
  }

  await addDoc(collection(db, 'questions'), newQ)
})

app.delete('/api/questions/:id', async (req, res) => {
  const id = req.params.id
  await deleteDoc(doc(db, 'questions', id))
})

app.listen(port, () => {
  console.log(`Quiz app listening on port ${port}`)
})
