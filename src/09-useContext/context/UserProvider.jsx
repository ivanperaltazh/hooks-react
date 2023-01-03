import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id:123,
//     name:'Ivan Peralta',
//     email:'ivan@hotmail.com'
// }

/* Higher-Order Components (Componentes de orden superior)
   Son como cualquier componente de React. La única diferencia es que dentro 
   pueden recibir otros componentes
   Reciven como argumentos los hijos, esto los diferencia de otros componentes
   ,y es opcional */
   /* Aqui "UserProvider" es el proveedor de nuestro "UserContext" dentro del cual colocamos todos los hijos*/

   /* Este "UserProvider" se colocara en la parte mas alta de nuestro arbol en este caso en MainApp */

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{hola:'Mundo', user:user}}>
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
