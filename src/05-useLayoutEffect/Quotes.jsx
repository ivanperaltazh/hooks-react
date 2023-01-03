import { useLayoutEffect, useRef, useState } from "react"

export const Quotes = ( {quote, author}) => {

    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({width:0, height:0});

    /*
    useLayoutEffect
    La firma es idéntica a useEffect, pero se dispara de forma síncrona 
    después de todas las mutaciones de DOM. Use esto para leer el diseño 
    del DOM y volver a renderizar de forma sincrónica. Las actualizaciones 
    programadas dentro de useLayoutEffect se vaciarán sincrónicamente, 
    antes de que el navegador tenga la oportunidad de pintar.

    Prefiera el useEffect estándar cuando sea posible para evitar el bloqueo 
    de actualizaciones visuales.
    */

    useLayoutEffect(() => {
      const {height, width} = pRef.current.getBoundingClientRect();
      setBoxSize({height, width});
    }, [quote]); //"quote" no se hace falta ponerlo porque se crea y se destruye por el condicional al mostrar


    return (
        <>
         <blockquote 
             className="blockquote text-right"
             style={{display:'flex'}}
             >
            <p ref={pRef} className="mb-1"> {quote} </p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>

          <code>{JSON.stringify(boxSize)}</code> <br />
        </>
      
    )
  }