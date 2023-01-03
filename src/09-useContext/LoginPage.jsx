import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {
  // Para usar  los datos del "UserProvider" usamos el hook useContextç
  // y dentro los parentesis (UserContext) le pasamos el contexto de donde quiero los datos
  // porque pueden haber varios contexto
  const {hola, user, setUser} = useContext(UserContext); 
  // console.log(hola, user);

    return (
      <>
        <h1>LoginPage</h1>
        <hr />
        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>

{/* Aqui un ejemplo de como compartir infromacion desde un componente a otros
    ya que este user enviado desde aqui se podra ver tambien el HomePage: */}
        <button 
          className="btn btn-primary"
          onClick={()=> setUser({id:123, name: 'Ivan P.', email:'ivanp@hotmail.com'})}
          >
          Establer usuario
        </button>
        
      </>
    )
  }