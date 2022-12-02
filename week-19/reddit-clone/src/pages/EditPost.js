import { useParams, Navigate } from 'react-router-dom'
import Header from '../componenets/Header'
import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore'
import { db } from '../init-firebase'

function EditPost() {
  const params = useParams()

  const [toEdit, setToEdit] = useState({})
  const [redirectHome, setRedirectHome] = useState(false)

  useEffect(() => {
    const getPosts = async () => {
      const postsArr = []
      const querySnapshot = await getDocs(collection(db, 'posts'))
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const fetchedPost = doc.data()
        let postObj = {
          fbID: doc.id,
          ...fetchedPost,
        }
        postsArr.push(postObj)
      })
      const postToEdit = postsArr.filter((post) => post.fbID === params.id)
      setToEdit(postToEdit[0])
    }
    getPosts()
  }, [params.id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!toEdit.title || !toEdit.url) {
      window.alert('Both fields are required!')
    } else {
      await setDoc(doc(db, 'posts', toEdit.fbID), {
        ...toEdit,
        title: toEdit.title,
        url: toEdit.url,
      })
      setRedirectHome(true)
    }
  }

  if (redirectHome) {
    return <Navigate to='/' replace={true} />
  }

  return (
    <>
      <Header subtitle='EDIT POST' />
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
            defaultValue={toEdit ? toEdit.title : ''}
            onChange={(e) =>
              setToEdit((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          ></textarea>
          <label htmlFor='url' className='mt-3'>
            URL
          </label>
          <input
            type='text'
            name='url'
            id='url'
            className='my-2'
            defaultValue={toEdit ? toEdit.url : ''}
            onChange={(e) =>
              setToEdit((prevState) => ({
                ...prevState,
                url: e.target.value,
              }))
            }
          />
          <button className='text-bg-primary p-2 text-center text-white fw-bold new-post w-50 mt-2 border border-0'>
            SUBMIT
          </button>
        </form>
      </div>
    </>
  )
}

export default EditPost
