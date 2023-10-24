
import { useEffect, useState } from 'react';
import Students from './Student';

function App() {
  // let counter = 0;

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter(counter + 1);
    console.log(counter);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  const resetvalue = () => {
    setCounter(0);
  }

  useEffect(() => {
    console.log(counter);
  }, [counter])

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
