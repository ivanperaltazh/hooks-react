import { useState } from "react";

// Hook generico para manejo de cualquier formulario retorna: {formState, onInputChange}
// y los campos por separado con : ...formState
// De esta manera se reaprovecha codigo quedando los componetes mas simples y faciles de leer
export const useForm = (initialForm = {}) => {

  // initialForm -> contine los campos del fomulario resividos como un objeto ejemplo {usermane:'', email:'',...}
    const [formState, setFormState] = useState(initialForm);
    
    /*
    const onInputChange = (event) => {
      console.log(event.target.value); // valor
      console.log(event.target.name); // elemento que cambia
    }
    */ // Desestructurando el evento resivido quedaria:
    
    const onInputChange = ({target}) => {
        const {name, value} = target;
        // console.log({name, value});
        setFormState({
           ...formState,
           [name]: value // seteo valores del formulario por propiedad "name"
        })
      }

      const onResetForm = () => {
        setFormState(initialForm);
      }
  

// Retornamos como objeto porque es facil expandir (enviar màs campos) que array o un tipo simple como booleano, etc.
    return {
         ...formState, // al pasarlo asi se podran desestructurar directamente las propiedades
         formState,
         onInputChange,
         onResetForm
  }
}
