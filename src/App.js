import './App.css';
import React, {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    return (
    <div className="App">
        <button className="button" onClick={ ()=> setCounter(counter + 1)}> + </button>
        <button className="button" onClick={ ()=> setCounter(counter - 1)}> - </button>
        <h2 className="counter"> {counter} </h2>
    </div>
  );
}

export default App;
