import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

//Si colocamos un funcionn fuera del componente, esta no volvera a renderizasarse junto con el compoente
const heavystuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Aqui la funcion');
  }
  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

   const {counter, increment} = useCounter(4000);
   const [show, setShow] = useState(true);

   /* Memoriza un valor, a menos que las dependencias del useMemo cambien.
      aqui del useMemo llamamos la funcion heavystuff() y useMemo devolvera el
      valor memorizado de la funcion heavystuff()
      dentro de lo corchetes [] le decimos que useMemo vuelva reprocesar la 
      funcion solo si las dependencias cambiam ( es de cir el valor de counter cambia).
      Si dejamos el areglo vavio [] solo memorizara la primera vez, pero aqui 
      quiero memorizarlo cada vez que el valor del counter cambie */
   const memorizedValue = useMemo(() => heavystuff(counter),[counter]);

  return (
        <>
            <h1>Counter <small>{counter}</small></h1>
            <hr />

{/* Puedo memorizar el resultado de la funcion heavystuff(counter)para que no se vuelva a ejecute esta 
 cada vez que cambie la variable "show" del useSate. Ya que no tiene sentido que se vuelva a ejecutar
 heavystuff() al cambier una variable  que no esta relacionada y ademas el  heavystuff() es un proceso pesado ya hace 4000 interacciones */}
  
   {/* <h4>{heavystuff(counter)}</h4> */}
   {/* Ahora en vez de colocar el llamado a la funcionn directamente, coloco el valor memorizado */}
            <h4>{memorizedValue}</h4>

            <button
            className="btn btn-primary"
            onClick={() => increment()}
            > +1</button>

            <button
             className="btn btn-outline-primary"
             onClick={() => setShow(!show)}
            >Show/hide {JSON.stringify(show)}
            </button>
        </>
  )
}
