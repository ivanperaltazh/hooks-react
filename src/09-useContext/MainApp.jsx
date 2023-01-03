import { Routes, Route, Navigate, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";


export const MainApp = () => {
  return (
    /* 
      Este "Userporvider" se colocara en la parte mas alta de nuestro arbol en este caso en MainApp
      asi todos los compoentes y subcomponetes dentro de este podran tener acceso a la información
     */
<UserProvider>
   {/* CREAMOS EL MENU:    */}
   {/*   <a href="/">Home</a> Esto haria que refresque la pagina y vuelva a cargar librerias y toda la
       aplicacion esto se usaria solo para navegar a lugar externo de aplicacion.
       por eso "react-router-dom" envez de  <a href="/"> o frece el <Link to="/">
       NOTA: para maquetas con CSS el "Link" se hace con etiqueta "a" ejemplo: "a {margin-right: 5px;}"
         porque al final en el html se tradu ce a un "a"*/}

        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">login</Link> */}
        <Navbar/>
      <hr />

      
   {/* CREAMOS LAS RUTAS: */}
      <Routes>
           <Route path="/"  element={ <HomePage /> } />
           <Route path="login"  element={ <LoginPage /> } />
           <Route path="about"  element={ <AboutPage /> } />

       {/* Para rutas no encontradas path="/*" muestra componente por defecto: */}
           {/* <Route path="/*"  element={ <LoginPage /> } /> */}

       {/* Otra forma de hacerlo es usando el <Navigate> de "react-router-dom" y el "to" aL PATH deseado, mejor porque cambia la ruta en el navegador: */}
           <Route path="/*"  element={ <Navigate to= {"/about"}/> } />
      </Routes>
      
    </UserProvider>
  )
}
