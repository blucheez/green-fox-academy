import { Link } from 'react-router-dom'

function Side() {
  return (
    <>
      <div className='w-75 m-3'>
        <div className='w-100'>
          <Link
            to='/new-post'
            className='btn w-100 rounded-0 text-bg-primary p-2 text-center text-white fw-bold new-post text-decoration-none'
          >
            SUBMIT A NEW POST
          </Link>
        </div>
        <div className='about'>
          <div className='about-title bg-white fw-bold p-3 mt-3'>
            ABOUT <span className='text-primary'>r/space</span>
          </div>
          <div className='about-title bg-light fw-bold p-3'>
            <div className='text-center'>
              Share & discuss informative content on:
            </div>
            <ul className='mt-2'>
              <li>Astrophysics</li>
              <li>Cosmology</li>
              <li>Space Exploration</li>
              <li>Planetary Science</li>
              <li> Astrobiology </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Side
