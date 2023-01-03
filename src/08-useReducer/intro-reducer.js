// Estado inicial
const initialSate = [{
    id:1,
    todo:'Recolectar la piedra del alma',
    done: false,
}];

// Un funcion Reducer recibe un estado incial una acion y retorna un nuevo estado 
// ese es su objetivo.
// Función pura, es decir debe de resolver todo internamente sin llamar otras funciones.
const todoReducer = (state= initialSate, action = {} ) => {
    if(action.type === '[TODO] add todo'){
        // No usar el push() porque muta el estado 
        // state.push(action.payload)
        return [ ...state, action.payload ]
    }
    // Aqui retorna el mismo estado en caso que la accion no sea identificada dentro de este reducer
    // asi no da error y simplemente no pasa nada.
    return state;
}

//Obtenemos estado inicial
let todos = todoReducer();

// Nueva tarea por hacer
const newTodo = [{
        id:1,
        todo:'Recolectar la piedra de poder',
        done: false,  
    }];

// Accion
const addTodoAction = {
       type: '[TODO] add todo',
       payload: newTodo
    };


// llamamor a fucnion Reducer pasandole estado incial más nueva accion para anadir nueva tarea
todos = todoReducer(todos, addTodoAction);

console.log({state:todos});

// esto no se debe hacer, modificar directamente el estado:
// todos.push({
//     id:1,
//     todo:'Recolectar la piedra de poder',
//     done: false,  
// });