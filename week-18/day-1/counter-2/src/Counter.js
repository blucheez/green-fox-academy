import { useState } from 'react'

function Counter({ n }) {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <h2>Counter {n}</h2>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </>
  )
}
export default Counter
