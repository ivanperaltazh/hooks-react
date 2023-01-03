import { useState } from "react";


export const useCounter = (initialValue = 10) =>{ // valor por defecto 10

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => { setCounter(counter + value)} // imcrementara segun valor pasado
    const decrement = () => {
         if (counter === 0) return
         setCounter(counter - 1)
        }
    const reset = () => { setCounter(initialValue)}

    return{ // se tiene que hacer return funciones para que quien use el hook lo pueda modificar hacer set del valor con el increment()
       counter,
       increment,
       decrement,
       reset
    }
}
