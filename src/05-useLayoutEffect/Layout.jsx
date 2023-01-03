

// importado desde archivo de barril index.js
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote} from "../03-examples"; // se importan del  archivo barril index.js
import { Quotes } from "./Quotes";




export const Layout = () => {

    const {counter, decrement,increment, reset } = useCounter(1);

    const {data, isloading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`); 
    console.log({data, isloading, hasError}); 

   // doble negacion !!data, dará true cuando efectivamente contenga data, y false cuando sea null. Y al dar false no dara error mientras que null si da error
   const {quote , author} = !!data && data[0];//si data fuera un arreglo que pudira esta vacio


    // se puede hacer return aqui si loading asi:
    // if (isloading) {
    //     return ( <h1>Caragando ...</h1>  )
    // }
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {/* {
         isloading
            ?(
                <div className="alert alert-info text-center"> Loading ... </div>
            )
            :(
                <blockquote className="blockquote text-end">
                <p className="mb-1"> <img src={image} alt="" /> </p>
                <footer className="blockquote-footer">{name}</footer>
            </blockquote>
            )
        } */}

{/* Envez de usar el operador ternario como arriba quedaria mas claro el codigo con componetes y operador && asi: */}
      {  isloading && <LoadingQuote />}
 
      { !isloading &&  <Quotes quote={quote} author={author}/>}

      { hasError &&  (<div className="alert alert-danger text">Hubo un error en la petición de tipo: {hasError.message} </div>)}
       
       {/* disabled={isloading} para que mientras se carge nos e pueda hacer click en boton */}
       <button 
         className="btn btn-primary" 
         disabled={isloading}
         onClick={() =>increment()} >
         Next qoute
        </button>
       
    </>
  )
}
