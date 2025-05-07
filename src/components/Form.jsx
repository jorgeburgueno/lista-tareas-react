import React from "react";
import { useState } from "react";

function Form({ onFormSubmit }) {
  const [todo, setTodo] = useState({ nombre: "", fecha: "", descripcion: "" });

  function handleSubmit(event) {
    event.preventDefault();
    onFormSubmit(todo);
    setTodo({ nombre: "", fecha: "", descripcion: "" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="nombre" value={todo.nombre} onChange={handleChange} />
        <input
          name="fecha"
          type="date"
          value={todo.fecha}
          onChange={handleChange}
        />
        <input
          name="descripcion"
          value={todo.descripcion}
          onChange={handleChange}
        />
        <button type="submit">✔</button>
      </form>
    </div>
  );
}

export default Form;
