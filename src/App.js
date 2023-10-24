
import { useState } from 'react';
import Students from './Student';

function App() {
  // let counter = 0;

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    console.log(counter);
  }

  const removeValue = () => {
    setCounter(counter - 1);
    console.log(counter);
  }

  const resetvalue = () => {
    setCounter(0);
    console.log(counter);
  }

  return (
    <>
      <Students name="John Doe" />
      {counter}

      <button onClick={addValue}>
        Add
      </button>

      <button onClick={removeValue}>
        Remove
      </button>

      <button onClick={resetvalue}>
        Reset
      </button>
    </>
  );
}

export default App;
