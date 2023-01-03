import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

 const {counter, decrement,increment, reset } = useCounter();


  return (
    <>
    <h1>Counter with Hook: {counter}</h1>
    <hr/>
    <button onClick={() => increment(2)} className="btn btn-primary">+1</button> 
    <button onClick={reset} className="btn btn-primary">Reset</button>
    <button onClick={decrement} className="btn btn-primary">-1</button>
    </>
  )
}
