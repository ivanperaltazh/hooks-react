
import { useTodos } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {

const {todos, todosCount, pendingTodosCount,  handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodos();

  return (
    <>
      {/* <h1>TdoApp: {todos.length} <small>- Pendiente: {todos.filter(todo => !todo.done).length}</small></h1> */}
      <h1>To_doApp: {todosCount} <small>- Pendiente: {pendingTodosCount}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
            {/* Aqui le pasamos el "id" al handleDeleteTodo es igual hacer: id => handleDeleteTodo(id) */}
            <TodoList 
                 todos={todos} 
                 onDeleteTodo={handleDeleteTodo}
                 onToggleTodo = {handleToggleTodo}
            /> 
        </div>
        <div className="col-5">
              <h4>Agregar TODO</h4>
              <hr />
             <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}
