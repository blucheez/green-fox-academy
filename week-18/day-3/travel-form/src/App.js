import { useState } from 'react'

function App() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    location: '',
    diet: [],
  })

  const handleChange = (e) => {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCheckboxChange = (event) => {
    let newArray = [...data.diet, event.target.value]
    if (data.diet.includes(event.target.value)) {
      newArray = newArray.filter((dietEle) => dietEle !== event.target.value)
    }
    setData((data) => ({
      ...data,
      diet: newArray,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    Object.entries(data).forEach(([key, value]) => (
      console.log(`${key}: ${value}`)
    ))}
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input type='number' name='age' id='age' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='gender'>Gender</label>
          <input
            type='radio'
            name='gender'
            id='male'
            value='Male'
            onChange={handleChange}
          />
          <label htmlFor='male'>Male</label>
          <input
            type='radio'
            name='gender'
            id='female'
            value='Female'
            onChange={handleChange}
          />
          <label htmlFor='female'>Female</label>
        </div>
        <div>
          <label htmlFor='location'>Location</label>
          <select name='location' id='location' onChange={handleChange}>
            <option value=''>--</option>
            <option value='Australia'>Australia</option>
            <option value='USA'>USA</option>
            <option value='China'>China</option>
          </select>
        </div>
        <div>
          <div>
            <label htmlFor='diet'>Dietary restrictions</label>
            <input
              type='checkbox'
              id='kosher'
              name='diet'
              value='Kosher'
              onChange={handleCheckboxChange}
            />
            <label htmlFor='kosher'>Kosher</label>
            <input
              type='checkbox'
              id='vegetarian'
              name='diet'
              value='Vegetarian'
              onChange={handleCheckboxChange}
            />
            <label htmlFor='vegetarian'>Vegetarian</label>
            <input
              type='checkbox'
              id='lactoseFree'
              name='diet'
              value='Lactose free'
              onChange={handleCheckboxChange}
            />
            <label htmlFor='lactoseFree'>Lactose free</label>
          </div>
        </div>
        <button type='submit'>OK</button>
      </form>
    </div>
  )
}

export default App
