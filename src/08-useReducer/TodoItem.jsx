


export const TodoItem = ({todo, onDelete, onToggleTodo}) => {
  return (
      <li className="list-group-item d-flex justify-content-between">
         {/* ponemos parentesis vacios porque no necesitamos enviar argumentos en () => onToggleTodo */}
           
  {/* esto añade un class llamada "false" que no pasa nada con los estilos si no hay una clase con ese nombre
   por eso otra opcion es usar el operadore ternario ?.
  className={`align-self-center ${todo.done && 'text-decoration-line-through'}`} */}
            <span 
               className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
               onClick={() => onToggleTodo(todo.id)}
               >
                {todo.description}
            </span>
            <button 
              className="btn btn-danger"
              onClick={() => onDelete(todo.id)}
              >Borrar
              </button>
      </li>
  )
}
