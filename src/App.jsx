import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>Compteur : {count}</p>

      <button onClick={increment}> Incremmenter</button>
      <button onClick={decrement}> Decrementer</button>
    </>
  );
}

export default App;
