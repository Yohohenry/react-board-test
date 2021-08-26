import "./App.css";
import { useState, useRef, useEffect } from "react";
import TodoItem from "./TodoItem";

function writeTodosLocalStorage(todos) {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

function App() {
  const id = useRef(1);
  const [todos, setTodos] = useState(() => {
    console.log("init");
    let todoData = window.localStorage.getItem("todos") || "";
    if (todoData) {
      todoData = JSON.parse(todoData);
      id.current = todoData[0].id + 1;
    } else {
      todoData = [];
    }
    return todoData;
  });
  const [value, setValue] = useState("");

  useEffect(() => {
    writeTodosLocalStorage(todos);
    console.log(JSON.stringify(todos));
  }, [todos]);

  const handleButtonClick = () => {
    setTodos([
      {
        id: id.current,
        content: value,
      },
      ...todos,
    ]);
    setValue("");
    id.current++;
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handletoggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="todo"
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Add todo</button>
      {todos.map((todo) => (
        <TodoItem
          Key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handletoggleIsDone={handletoggleIsDone}
        />
      ))}
    </div>
  );
}

export default App;
