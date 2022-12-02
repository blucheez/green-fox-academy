import { useEffect, useState } from 'react'
import downvote from '../assets/downvote.png'
import downvoted from '../assets/downvoted.png'
import upvote from '../assets/upvote.png'
import upvoted from '../assets/upvoted.png'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../init-firebase'
import { Link } from 'react-router-dom'

const postTime = (timestamp) => {
  const currentTime = new Date()
  const expireTime = new Date(timestamp)

  const days = (currentTime - expireTime) / (1000 * 60 * 60 * 24)
  return Math.round(days)
}

function PostItem({ post }) {
  const { title, url, timestamp, score, owner, vote, fbID } = post

  const [localScore, setLocalScore] = useState(score)
  const [localVote, setLocalVote] = useState(vote)

  useEffect(() => {
    const updatePost = async () => {
      await setDoc(doc(db, 'posts', fbID), {
        ...post,
        score: localScore,
        vote: localVote,
      })
    }
    updatePost()
  }, [localScore, localVote, fbID, post])

  const handleArrowUpClick = () => {
    setLocalVote(1)
    setLocalScore(localScore + 1)
  }

  const handleArrowDownClick = () => {
    setLocalVote(-1)
    setLocalScore(localScore - 1)
  }

  return (
    <div className='bg-white my-3 w-100 d-flex px-3'>
      <div className='vote d-flex flex-column m-3'>
        <img
          src={localVote > 0 ? upvoted : upvote}
          alt='upvote'
          role='button'
          onClick={handleArrowUpClick}
        />
        <div className='fw-bold my-1'>{localScore}</div>
        <img
          src={localVote < 0 ? downvoted : downvote}
          alt='downvote'
          role='button'
          onClick={handleArrowDownClick}
        />
      </div>
      <div className='post mb-2'>
        <div className='title my-2 fw-bold fs-5'>
          <p className='pe-2'>
            {title}
            <span className='url fs-6 text-secondary ms-2'>({url})</span>
          </p>
        </div>
        <div className='posted'>
          submitted {postTime(timestamp)} days ago by
          <span className='text-primary ms-1'>
            {owner ? owner : 'anonymus'}
          </span>
        </div>
        <div className='post-links'>
          <Link className='text-decoration-none text-muted me-2' to={`/edit/${fbID}`} >
            modify
          </Link>
          <a className='text-decoration-none text-muted ' href='/'>
            remove
          </a>
        </div>
      </div>
    </div>
  )
}
export default PostItem
