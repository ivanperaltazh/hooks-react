
//import React from 'react';
import {memo} from 'react';


//export const Small = React.memo( ({value}) => { // otra forma de usarlo
export const Small = memo( ({value}) => {

/* Un componente (como <Small/>) solo deberia volver a dibujarse si cambian sus properties (aqui el counter o value), pero no si cambia solo el padre.
   es recomendable memorizar un componente cuando este es grande o hay un proseso pesado  que pueda penalizar el rendimiento y sea deseable  que el componente 
   se actualice solo cuando sus properties cambien. Pero si el componente es pequeño no hace falta memorizarlo, no es recomendable ni necesario */
/* Para memorizar ponemos todo el componente entre parentesis anteponiendo la palabra memo(component)*/ 
console.log( 'Me volvi a dibujar :(' );

  return (
    <small>{value}</small>
  )
})
