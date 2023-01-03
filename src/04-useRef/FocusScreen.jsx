import { useRef } from "react";
import { PreviousValue } from "./PreviousValue";
import { RenderCount } from "./RenderCount";


export const FocusScreen = () => {

/* El "useRef" es un hook que permite persistir valores entre renderizados.
   El objeto devuelto se mantendrá persistente durante la vida completa del componente.
   Se puede usar para almacenar un valor mutable que no provoca una nueva representación cuando se actualiza.
   No causa re-renderizaciones como el useState.
   En este caso mantenemos la referencia a un input concreto, la referecia sera unica para cada input incluso en caso de tener varios inputs*/
const inputRef = useRef();
    

const onClick = ()=>{
      // document.querySelector('input').focus();
      // document.querySelector('input').select(); // esto no es efectivo si hubieran varios componentes como este para eso usamos mejor useRef()
 
      inputRef.current.select();
    }


  return (
    <>
    <h1> - Focus Screen</h1>
    <hr />
    <input 
        ref={ inputRef }
        type="text"
        placeholder="ingrese su nombre"
        className="form-control"
    />

    <button 
       className="btn btn-primary mt-2"
       onClick={onClick}
       >Set focus</button>

        <PreviousValue />
        <RenderCount />
    </>
  )
}
