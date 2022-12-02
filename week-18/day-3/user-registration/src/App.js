import { useState } from 'react'

function App() {
  const [data, setData] = useState({
    username: '',
    emailAddress: '',
    password: '',
  })
  const [isDisabled, setIsDisabled] = useState(true)

  const validateAll = (data) => {
    console.log(data.password.length)
    if (
      data.username.length <= 0 ||
      !data.emailAddress.includes('@') ||
      data.password.length <= 7
      
    ) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }

  const handleChange = (e) => {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }))

    validateAll(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <div className='App'>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '300px' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          id='username'
          onChange={handleChange}
        />
        <label htmlFor='emailAddress'>Email</label>
        <input
          type='email'
          name='emailAddress'
          id='emailAddress'
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={handleChange}
        />
        <button type='submit' disabled={isDisabled}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
