import { useState } from 'react'

function TodoApp() {
  let state = {
    todo: [
      {
        text: 'Feed the monkey',
        prio: 2,
      },
      {
        text: 'Buy milk',
        prio: 1,
      },
    ],
    doneTodo: [
      {
        text: 'Sleep 8 hours',
        prio: 2,
      },
      {
        text: 'Mentoring others',
        prio: 1,
      },
    ],
  }
  const [todos, setTodos] = useState(state.todo)
  const [doneTodos, setDoneTodos] = useState(state.doneTodo)

  const handleDone = (text) => {
    const todosCopy = [...todos]
    const doneTodosCopy = [...doneTodos]

    const filtered = todosCopy.filter((todo) => todo.text !== text)
    for (let todo of todosCopy) {
      if (todo.text === text) {
        doneTodosCopy.push(todo)
      }
    }
    setTodos(filtered)
    setDoneTodos(doneTodosCopy)
  }
  const handleDelete = (text) => {
    const todosCopy = [...todos]
    const doneTodosCopy = [...doneTodos]

    const filtered = doneTodosCopy.filter((todo) => todo.text !== text)
    for (let todo of doneTodosCopy) {
      if (todo.text === text) {
        todosCopy.push(todo)
      }
    }
    setDoneTodos(filtered)
    setTodos(todosCopy)
  }

  const sortAndRender = (state) => {
    const obj = [...state]
    obj.sort((a, b) => a.prio - b.prio)
    if (state === todos) {
      return obj.map((todo) => (
        <>
          <li key={todo.text}>
            {todo.text}
            <button onClick={() => handleDone(todo.text)}>done</button>
          </li>
        </>
      ))
    }

    if (state === doneTodos) {
      return obj.map((todo) => (
        <>
          <li key={todo.text}>
            {todo.text}
            <button onClick={() => handleDelete(todo.text)}>delete</button>
          </li>
        </>
      ))
    }
  }

  return (
    <>
      <h3>TODOS:</h3>
      <ul>{sortAndRender(todos)}</ul>
      <h3>DONE TODOS:</h3>
      <ul>{sortAndRender(doneTodos)}</ul>
    </>
  )
}
export default TodoApp
