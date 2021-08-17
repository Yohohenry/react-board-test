import './App.css';
import styled from 'styled-components'
import {useState, useRef} from 'react'
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG} from './constants/style'
import TodoItem from './TodoItem'


function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'abc', isDone: true},
    {id: 2, content: 'def', isDone: false},
  ])
  const [value, setValue] = useState('')
  const id = useRef(3)

  const handleButtonClick = () => {
    setTodos([{
      id: id.current, 
      content: value
    }, ...todos])
    setValue('')
    id.current++
  }
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handletoggleIsDone = id => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <input type='text' placeholder='todo' value={value} onChange={handleInputChange} /> 
      <button onClick={handleButtonClick}>Add todo</button>
      {
        todos.map(todo => <TodoItem Key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handletoggleIsDone={handletoggleIsDone} />)
      }
    </div>
  );
}

export default App;
