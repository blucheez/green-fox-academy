import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Display from './Display'
import TodoApp from './TodoApp'

function SimpleGoldenAcornApp() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrease = () => {
    count > 0 && setCount(count - 1)
  }

  const handleKeyDown = (event) => {
    console.log('User pressed: ', event.key)
    if (event.key === 'ArrowUp') {
      setCount(count + 1)
    }
    if (count > 0 && event.key === 'ArrowDown') {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div tabIndex={0} onKeyDown={handleKeyDown}>
        <Button func={handleIncrement} text={'Buy one'} />
        <Display>{count}</Display>
        <button onClick={handleDecrease}>Eat one</button>
      </div>
      <TodoApp />
    </>
  )
}

SimpleGoldenAcornApp.propTypes = {
  func: PropTypes.func,
  text: PropTypes.string,
}

export default SimpleGoldenAcornApp
