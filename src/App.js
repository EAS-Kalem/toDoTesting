import { useState } from "react";
import React from "react"
import { Todos } from "./components/todos";


export default function App() {
  const [text, setText] = useState()
  const [todos, setTodos] = useState([])

  const handleAddButtonClick = () => {
    setTodos([...todos, { text, complete: false }])
    console.log(todos)
    setText("")
  }

  const toggleTodo = (index) => {
    setTodos(todos.map((todo, idx) => idx == index ? { ...todo.complete = !todo.complete } : todo))
    console.log(todos)
  }

  const handleInputChange = (e) => {
    setText(e.target.value)
    console.log(todos)
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddButtonClick}>add</button>
      <Todos todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
}