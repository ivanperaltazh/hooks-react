import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";



const initialSate = [
    //     {
    //      id: new Date().getTime(),
    //      description: 'Recolectar la piedra del alma',
    //      done:false
    //    }
    ];
    
    
    //Para cargar datos del localStorage al iniciar componente.Se usa en useReducer()
    const init = () => {
        // convierte el string de datos en un objeto de JavaScript
        return JSON.parse(localStorage.getItem('todos')) || []; // si no hay datos regresamos arreglo vacio.
    }
    

export const useTodos = () => {
    // const [state, dispatch] = useReducer(reducer, initialSate); //firma de useReducer
// dispatch = funcion que despacha acciones al reducer
// init: funcion que inicializa el reducer por ejemplo aqui para cargar los datos (todos) del localStorage
const [todos, dispatch] = useReducer(todoReducer, initialSate, init);

//Guardar tareas (todos) en localStorage, es un efecto segundario para lo cual usamos useEffect:
useEffect(() => {
  // no se requiere importar localstorage viene por defecto igual fetch o eventos y solo permite guardar strings
 // JSON.stringify() convierte objeto javascript en string.
  localStorage.setItem('todos', JSON.stringify(todos)|| []);
}, [todos]) // cuando cambie la lista de taresas (todos)


const handleNewTodo = ( todo ) => {
    const action = {
        type: '[TODO] Add Todo',
        payload: todo,
    };
   dispatch( action ); // enviamos la accion al reducer con el dispatch()
}

const handleDeleteTodo = ( id ) => {
   // console.log("id", id);
    dispatch({
        type: '[TODO] remove Todo',
        payload: id
    })
}

const handleToggleTodo= ( id ) => {
   //  console.log("id", id);
     dispatch({
         type: '[TODO] Toggle Todo',
         payload: id
     })
 }


const todosCount = () => {
    return todos.length;
}


// const pendingTodosCount = () => {
//     return todos.filter(todo => !todo.done).length
// }


  return {
     todos,
     handleDeleteTodo,
     handleNewTodo,
     handleToggleTodo,
     todosCount: todosCount(),
     pendingTodosCount: todos.filter(todo => !todo.done).length
  }
}
