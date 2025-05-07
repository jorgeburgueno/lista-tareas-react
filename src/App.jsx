import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  const [todoList, setTodoList] = useState([]);

  function handleTodoNuevo(newTodo) {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  }
  return (
    <>
      <h1>Pendientes</h1>
      <Form onFormSubmit={handleTodoNuevo} />
      <DisplayTodos todos={todoList} />
    </>
  );
}

export default App;
