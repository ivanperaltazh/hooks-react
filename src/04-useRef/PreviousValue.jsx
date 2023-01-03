import { useState, useEffect, useRef } from "react";

export const PreviousValue = () => {
  

    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <>
      <h1 className="mt-5">- Previus Value</h1>
       <hr />
        <input
          type="text"
          value={inputValue}
          className="form-control"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h5>Current value: {inputValue}</h5>
        <h5>Previous value: {previousInputValue.current}</h5>
      </>
  )
}
