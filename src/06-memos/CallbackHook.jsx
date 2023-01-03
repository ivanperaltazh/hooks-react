import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  /* El hook "useCallback" se usa solo para memorizar funciones muy grandes que podrian penalizar el rendimiento, sino no hace falta  */

  /* Memorizamos la funcion ("setCounter((c) => c + value ) ") con el hook useCallback, 
     es decir esta funcion ocupara un mismo
     lugar en la memoria cada vez que incrementemos. Por tanto el componente <ShowIncrement/> no se deberia volver a generar,
      ya que esta memorizado con memo() y se le esta pasando la misma funcion (incrementar) que ocupa ahora la misma 
      posicion de memoria.
     <ShowIncrement/> deberia genearse solo la primera vez ya que esta memorizado. Pero luego al pulsar el boton incremntar ya no  porque la funcion incremtar sigue siendo la misma no ha cambiado.*/
  
  // Si se hace "setCounter(counter +1)" no funciona el incremento. Porque se memoriza el "counter" tambien que sera siempre 11 y no se incrementara al pulsar el boton
 // Por eso usamos (c) => c+ value ), donde aqui "c" es el valor actual del counter y se suma internamente con el valor pasado como argumento.
  const incrementFather =  useCallback(
      (value = 0) => { 
        console.log("memorizo funcion 'setCounter((c) => c + value ) ' con useCallback ", value);
        setCounter((c) => c + value ) },
        [],
    );

// const incrementFather = () =>{ setCounter(counter + 1)} // sustituimos esta funcion  por el useCallback de arriba para memorizarla

    /* En javascript las funciones y objetos cada vez que se vuelve a generar
       apuntan a posiciones de memoria diferentes.
       Por tanto aqui el incrementFather al estar dentro del componente se volvera a generar con cada renderizacion del mismo, 
       y sera diferente cada vez que se renderice el componente CallbackHook.

       Por tanto el hacer solo un de memo( <ShowIncrement increment={incrementFather } />), no funcionara ya que el incrementFather
       sera considerado una properti diferente por estar en una posicion de memoria diferente. Y <ShowIncrement> se volvera a renderizar.
       Y es en esta situación donde podremos usar el useCallback, que es siliamr al useMemo, solo que para
       memoriza funciones, y asi dicha funcion memorizada se volvera a procesar solo cuando algo cambie.
     */


       /*Otro uso de useCallback es evitar ciclos infinitos como al usar una funcion dentro del useEffect.
        Ya que si la funcion "incrementFather" si no estuviera memorizada en un "useCallback" cada vez que se ejecutaria 
        ocuparia un espacio de memoria diferente y se dispararia el useEffect.
        Y aqui al ser considerada la misma funcion y que no ha cambiado no se dispara infinitamente el useEffect.
         */
       useEffect(() => {
           incrementFather();
       }, [incrementFather])
       
   

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather } />
    </>
  )
}
