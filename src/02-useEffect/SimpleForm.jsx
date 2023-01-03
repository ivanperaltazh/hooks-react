import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {


const [formState, setFormState] = useState({
    username:'strider2',
    email:'ivanp@gmail.com'
});

const {username, email} = formState;

/*
const onInputChange = (event) => {
  console.log(event.target.value); // valor
  console.log(event.target.name); // elemento que cambia
}
*/ // Desestructurando quedaria:

const onInputChange = ({target}) => {
    const {name, value} = target;
    //console.log({name, value});
    setFormState({
       ...formState,
       [name]: value // seteo valores del formulario por propiedad "name"
    })
  }

  /*  useEffect()-> Tiene 2 argumentos la funcion que va ejecuatar (el callback) y un arreglo de dependencias
      que son las condiciones por las cuales el useEffect() se dispara.
      De esta manera al colocar un array vacio en las dependencias indica que solo se ejecuatra una vez
      cuando el componente es montado la primera vez. Si no se coloaca nada se dispara cada vez que haya
      cualquier cambio en el componete.
      Se recomienda crear un useEffect() por cada accion que se quiera realizar: */
   useEffect(() => { console.log('useEffect se llamo')}, []);

   // Por ejemplo useEffect() que se ejecute cada vez que el formulario cambie:
   useEffect(() => { console.log('useEffect formState change')}, [formState]);

   // Otro useEffect() que se ejecute solo cuando cambie el email del  formulario:
   useEffect(() => { console.log('useEffect email change')}, [email]);
  

  return (
   <>
   <h1>Formulario simple</h1>
   <hr />

   <input 
     type="text" 
     className="form-control"
     placeholder="Username"
     name="username"
     value={username}
     onChange={onInputChange}
   />
    <input 
     type="email" 
     className="form-control mt-2"
     placeholder="ferando@ggogle.com"
     name="email"
     value={email}
     onChange={onInputChange}
   />

   {/* Condiconal para mostrar mensaje: */}
      {
        (username === 'strider2') && <Message/>
      }

   </>
  )
}
