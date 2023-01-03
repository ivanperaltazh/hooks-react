/*
https://es.reactjs.org/docs/hooks-reference.html#usereducer
Una alternativa a useState. Acepta un reducer de tipo (state, action) => newState 
y devuelve el estado actual emparejado con un método dispatch. (Si está familiarizado 
con Redux, ya sabe cómo funciona).

useReducer a menudo es preferible a useState cuando se tiene una lógica compleja 
que involucra múltiples subvalores o cuando el próximo estado depende del anterior. 
*/

export  const todoReducer = ( initialState = [], action) => {

    //console.log("[todoReducer]-action *****", action);

    switch (action.type) {
        case '[TODO] Add Todo':
             if (action.payload === undefined) {return initialState}
// throw new Error('Action.type = [TODO] Add Todo, no esta implementada'); // recomendable colocar cuando aun no esta implementado para recordarlo
// Aqui siempre tengo que retornar un nuevo estado que puede ser: un objeto, string, boolean, array
// cuandop se usa arreglos evitar mutarlos por tanto no usar push(), para
// lo cual se puede usar el map() el filter() que retornan un nuevo arreglo pero es comun usar el spret los tre puntos ...
// action.payload -> contiene el nuevo "todo" (tarea por hacer);  
              return[...initialState, action.payload];

        case  '[TODO] remove Todo':
            //  if (action.payload === undefined) {return initialState}
              // usamos filter que no muta el areglo como el push(), sino retorna nuevo array
              return initialState.filter(todo => todo.id !== action.payload);

        case  '[TODO] Toggle Todo':
               return initialState.map(todo => {
                   // action.payload = id
                  if (todo.id === action.payload ){
                    // modificamos el done de cad tarea (todo), cuando se haga click
                     return{
                         ...todo,
                         done: !todo.done
                     }
                  }
                  return todo; // sino son igual es los id retorna la misma tarea (todo)
               });
 
        default:
              return initialState;
    }

}