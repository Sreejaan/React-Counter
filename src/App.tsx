import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  const handleUp = () => {
    const newCount = count+1;
    setCount(newCount);
    setHistory([...history, newCount])
  };
  
  const handleDown =() => {
    const newCount= count-1;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const reset = () => {
    const newCount = 0;
    setCount(newCount);
    setHistory([...history, newCount]);
  }
  
  return (
    <div className="container">
      <h1>Counter : {count}</h1>
      <div className="buttons">
        <button className="btn up" onClick={handleUp}>Up</button>
        <button className="btn down" onClick={handleDown}>Down</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
      <br/>
      <h2>History</h2>

      <div className="history-container">
        {history.map((h, i)=>
        <span key={i} className="history">{h}</span>
        )}
      </div>
    </div>
  )
}

export default App
