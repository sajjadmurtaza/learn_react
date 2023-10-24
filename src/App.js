
import Students from './Student';

function App() {
  let counter = 0;

  const addValue = () => {
    counter = counter + 1;
    console.log(counter);
  }

  return (
    <>
      <Students name="John Doe" />
      {counter}
      <button onClick={addValue}>
        Add
      </button>
    </>
  );
}

export default App;
