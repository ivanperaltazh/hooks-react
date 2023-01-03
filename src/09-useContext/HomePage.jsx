import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

  // Para usar  los datos del "UserProvider" usamos el hook useContextç
  // y dentro los parentesis (UserContext) le pasamos el contexto de donde quiero los datos
  // porque pueden haber varios contexto
  const {hola, user} = useContext(UserContext); 
  // console.log(hola, user);

    return (
      <>
        <h1>HomePage <small>{user?.name}</small></h1>
        <hr />
        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>
        
      </>
    )
  }