import { useState } from 'react'

function App() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [submited, setSubmited] = useState(false)

  const handleChange = (e) =>
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }))

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmited(true)
  }

  return (
    <div className='container' style={{ width: '300px' }}>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor='first-name'>First name</label>
        <input
          type='text'
          name='firstName'
          id='first-name'
          value={data.firstName}
          onChange={handleChange}
        />
        <label htmlFor='last-name'>Last name</label>
        <input
          type='text'
          name='lastName'
          id='last-name'
          value={data.lastName}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id='email'
          value={data.email}
          onChange={handleChange}
        />
        <button type='submit' style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>
      <div>
        <h3>State</h3>
        <ul>
          {submited &&
            Object.entries(data).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default App
