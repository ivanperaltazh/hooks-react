import { useEffect} from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

 // al pasar los campos desde useForm con ...formState, se pueden desestructurar directamennte (username, email, password)
const {formState, onInputChange, onResetForm, username, email, password} = useForm({
    username:'',
    email:'',
    password:''
});

//const {username, email, password} = formState; // no sevitamos hacer esto al pasar los campos desde useForm con ...formState,

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
   <h1>Formulario con Custom Hook</h1>
   <hr />

   <input 
     type="text" 
     className="form-control"
     placeholder="Username"
     name="username"
     value={username}
     onChange={event =>onInputChange(event)}
   />
   {/* onChange={event =>onInputChange(event)} equivale a -> onChange={onInputChange} */}
    <input 
     type="email" 
     className="form-control mt-2"
     placeholder="ferando@ggogle.com"
     name="email"
     value={email}
     onChange={onInputChange}
   />

<input 
     type="password" 
     className="form-control mt-2"
     placeholder="contraseña"
     name="password"
     value={password}
     onChange={onInputChange}
   />

      <button onClick={onResetForm}  className="btn btn-primary mt-2">Borrar</button>

   </>
  )
}
