import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
import {
  getAuth,
  signInAnonymously,
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyBwiRul4NP0vGZhuJ2-T7XzJhZOgDqzxGE',
  authDomain: 'todo-app-fc12b.firebaseapp.com',
  projectId: 'todo-app-fc12b',
  storageBucket: 'todo-app-fc12b.appspot.com',
  messagingSenderId: '481230472753',
  appId: '1:481230472753:web:8ac212bfaaa39bfbf6b710',
}

initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()
await signInAnonymously(auth)

const form = document.getElementById('form')
const newTodo = document.getElementById('todo')
const tbody = document.getElementsByTagName('tbody')[0]

form.onsubmit = async (e) => {
  e.preventDefault()

  const docRef = await addDoc(collection(db, 'firebase-todos'), {
    text: newTodo.value,
    completed: false,
  })

  form.reset()
}

/* const querySnapshot = await getDocs(collection(db, "firebase-todos"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
}); */

const unsub = onSnapshot(collection(db, 'firebase-todos'), (querySnapshot) => {
  tbody.innerHTML = ''
  //  console.log("Current data: ", doc.data());
  querySnapshot.forEach((listItem) => {
    // doc.data() is never undefined for query doc snapshots

    const tr = document.createElement('tr')
    const tdN = document.createElement('td')
    const tdTodo = document.createElement('td')
    const tdAction = document.createElement('td')
    const doneBtn = document.createElement('button')
    doneBtn.classList.add('btn', 'btn-outline-success', 'me-1')
    doneBtn.textContent = 'Done'
    const delBtn = document.createElement('button')
    delBtn.classList.add('btn', 'btn-outline-danger')
    delBtn.textContent = 'Delete'

    tbody.appendChild(tr)
    tr.appendChild(tdN)
    tr.appendChild(tdTodo)
    tr.appendChild(tdAction)

    tdN.textContent = tbody.children.length
    tdTodo.textContent = listItem.data().text
    tdAction.appendChild(doneBtn)
    tdAction.appendChild(delBtn)

    delBtn.onclick = async () => {
      await deleteDoc(doc(db, 'firebase-todos', listItem.id))
    }

    doneBtn.onclick = async () => {
      const docRef = doc(db, 'firebase-todos', listItem.id)

      // Set the "capital" field of the city 'DC'
      await updateDoc(docRef, {
        completed: !listItem.data().completed,
      })
    }

    if (listItem.data().completed) {
      tdTodo.style.textDecoration = 'line-through'
      tdTodo.style.color = 'green'
      tdTodo.style.fontStyle = "italic"
      doneBtn.classList.remove('btn-outline-success')
      doneBtn.classList.add('btn-success')
    }
  })
})
