import { collection, getDocs } from 'firebase/firestore'
import { db } from '../init-firebase'
import { useState, useEffect } from 'react'
import Header from '../componenets/Header'
import PostItem from '../componenets/PostItem'
import Side from '../componenets/Side'

function Home() {
  const [posts, setPosts] = useState([])

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
      setPosts(postsArr)
    }

    getPosts()
  }, [])
  return (
    <>
      <Header />
      <div className='container d-flex'>
        <div className=''>
          {posts.length &&
            posts.map((post) => {
              return <PostItem key={post.fbID} post={post} />
            })}
        </div>
        <Side />
      </div>
    </>
  )
}
export default Home
