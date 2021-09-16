import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  return (
    <div className="App">
      <header className="App-header">
        <div>{number}</div>
        <button onClick={()=> setNumber(Math.floor(Math.random() * 100) + 1)}>Aleatorizar</button>
      </header>
    </div>
  );
}

export default App;
