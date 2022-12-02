import Header from '../componenets/Header'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../init-firebase'
import { Navigate } from 'react-router-dom'

function AddPost() {
  const [title, setTitle] = useState('')
  const [URL, setURL] = useState('')
  const [redirectHome, setRedirectHome] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const randomNumber = () => Math.floor(Math.random() * 999) + 1

    if (!title || !URL) {
      window.alert('Both fields are required!')
    } else {
      const dataToAdd = {
        id: randomNumber(),
        title: title,
        url: URL,
        timestamp: new Date().toISOString(),
        score: randomNumber(),
        owner: null,
        vote: -1,
      }

      await addDoc(collection(db, 'posts'), dataToAdd)
      setRedirectHome(true)
    }
  }

  if (redirectHome) {
    return <Navigate to='/' replace={true} />
  }

  return (
    <>
      <Header subtitle='POST TO /R/SPACE' />
      <div className='bg-white w-50 p-3 fw-bold m-5'>
        <form className='d-flex flex-column' onSubmit={handleSubmit}>
          <label htmlFor='title'>
            <span className='text-warning'>* </span>Title
          </label>
          <textarea
            name='title'
            id='title'
            cols='30'
            rows='2'
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
          <label htmlFor='url' className='mt-3'>
            <span className='text-warning'>* </span> URL
          </label>
          <input
            type='text'
            name='url'
            id='url'
            className='my-2'
            onChange={(e) => setURL(e.target.value)}
          />
          <button className='text-bg-primary p-2 text-center text-white fw-bold new-post w-50 mt-2 border border-0'>
            SUBMIT
          </button>
        </form>
      </div>
    </>
  )
}
export default AddPost
