import { useEffect, useState } from "react";


export const useFetch = (url) => {

    const [state, setState] = useState({
        data:null,      // datos
        isloading: true, // defino propiedad indicar carga inicio en true
        hasError:null    // para error
    });

    const getFetch = async() => {

        // actualizamos el estado del isLoading a true de otra peticion
        setState({
            ...state,
            isloading:true
         });

    try {
      const resp = await fetch(url);
      if (!resp.ok)  {throw new Error(resp.status);} // lanzamos error que se imprimira en catch
      // console.error("Respuesta***", resp);
      const data = await resp.json();
    // console.log(data);

       setState({
            data:data,
            isloading: false, // aqui ya tengo los datos por tanto actualiza a false
            hasError:null
       });

      } catch (error) {
        console.error("***Error", error);

        setState({
          ...state,
          isloading:false,
          hasError:error
       });
      }
    }

    // se disparar cuandos e monte el componente
    useEffect(() => {
        getFetch();
    }, [url])
    

  return {
    data:state.data,     
    isloading: state.isloading,
    hasError: state.hasError
  };
}
