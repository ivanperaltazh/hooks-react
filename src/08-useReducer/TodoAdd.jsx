import { useForm } from "../hooks/useForm";


export const TodoAdd = ({onNewTodo}) => {

 const {description, onInputChange, onResetForm} = useForm(
        { description:''}
       );


  const onFormSubmit = (event) =>{
        event.preventDefault(); 
        if(description.length <= 1) return;

        const newTodo ={
          id: new Date().getTime(),
          description:description,
          done:false,
        }

      //Properties opciones condicional si existe funcion:
      //onNewTodo && onNewTodo()
        onNewTodo( newTodo); //llamamos  aqui funcion del prototype pasandole newTodo para emitirlo
        onResetForm(); //borramos para evitar que postee doble (es decir se envie dos veces)
    }

    

  return (
            <form  onSubmit={onFormSubmit}>
                  <input 
                    type="text" 
                    placeholder="¿Que hay que hacer?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                  />
                  <button 
                    onClick={() => onNewTodo()}
                    className="btn btn-outline-primary mt-1"
                    type="submit"
                  >
                      Agregar
                  </button>
              </form>
  )
}
