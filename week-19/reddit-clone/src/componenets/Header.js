import bg from '../assets/pexels-hristo-fidanov-1252890.jpg'

function Header({ subtitle }) {
  return (
    <header>
      <div
        className='d-flex flex-column justify-content-center align-items-center'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '20vh',
        }}
      >
        <h1 className='text-white'>SPACE</h1>

        <h5 className='text-white mt-2'>{subtitle ?? subtitle}</h5>
      </div>
    </header>
  )
}
export default Header
