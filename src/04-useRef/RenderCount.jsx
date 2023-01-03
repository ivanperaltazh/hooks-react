
import { useState, useEffect, useRef } from "react";

export const RenderCount = () => {

    const [inputValue, setInputValue] = useState(""); // solo para mostrar valor en el input
    const count = useRef(0); // "count"  su modificacion no causa nueva rennderización como en el useState, donde causaria un bucle infinito
  
    useEffect(() => {
      count.current = count.current + 1;
    }); // se ejecuta con cada renderización.
  
    return (
      <>
       <h3 className="mt-5">- Cuenta renderizaciones del componente</h3>
       <hr />

        <input
          type="text"
          value={inputValue}
          className="form-control"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h5>Render Count: {count.current}</h5>
    </>
    );
}
