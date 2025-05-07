export default function DisplayTodos({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <strong>{todo.nombre}</strong> {todo.fecha} : {todo.descripcion}
        </li>
      ))}
    </ul>
  );
}
