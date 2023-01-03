import { useEffect, useState } from "react"


export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

/*  useEffect -> tiene a parte de la funcion y depednencias el retorno que 
    se ejecuta cuando el compoente se destruye */
    useEffect(() => {
       console.log('Message Mounted'); // se ejecuta cuando componente se crea
      return () => {
        console.log('Message UnMounted'); // se ejecuta cuando componente se destruye
      }
    }, []);

    useEffect(() => {
        // desestructuramos event que resivimos de "window.addEventListener"  en x, y 
        const onMouseMove = ({x, y}) =>{
            // const coords = {x, y}
            setCoords({x,y});
        }
        // escucha movimientos de mouse y ejecuta unna funcicon:
        window.addEventListener('mousemove', onMouseMove); // se ejecuta cuando componente se crea
       return () => {
        window.removeEventListener('mousemove', onMouseMove);
       }
     }, []);
    


  return (
  <>
    <h3>usuario ya existe</h3>
    {JSON.stringify(coords)}
  </>
  )
}
