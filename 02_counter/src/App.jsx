import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);
  // let counter = 10;
  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1); 
    setCounter(prevCounter => prevCounter + 1); 

  
  };

  const removeValue = () => {
    setCounter(counter - 1)
    
    
  };
  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value : {counter}</button>
      <footer>Footer : {counter}</footer>
    </>
  );
}

export default App;
