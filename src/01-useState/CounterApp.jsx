import { useState } from "react"


export const CounterApp = () => {

// set cambia el valor de la propiedad incluso el tipo es decir de objeto se puede setear un numero por ejemplo
// por eso tener cuidado y pasar todas las propiedades requeridas

// const  [{counter1, counter2,counter3 }, setCounter] = useState({  // se puede desestructurare aqui directamente
    const  [state, setCounter] = useState({
    counter1:10,
    counter2:20,
    counter3:30,
 });

 const {counter1, counter2,counter3 } = state;

  return (
    <>
       <h1> Counter1: {counter1}</h1>
       <h1> Counter2: {counter2}</h1>
       <h1> Counter3: {counter3}</h1>
       <hr/>
       <button className="btn btn-primary"  onClick= {() => setCounter( 
        {
            ...state, // reduce codigo estan todas las propiedades
            counter1: counter1 + 1, // aqui solo modifico la que me interesa
           // counter2,
           // counter3
        } 
        )
        }> +1 </button>
    </>
  )
}
