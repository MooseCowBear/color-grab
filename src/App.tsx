import { useState } from "react";
import "./App.css";
import Swatches from "./Swatches";

function App() {
  const [click, setClick] = useState<boolean>(false);

  const clickHandler = () => {
    setClick((click) => !click);
  }

  return (
    <>
      <h1>Color Grab</h1>
      <Swatches click={click} />
      <button onClick={clickHandler}>Get new colors</button>
    </>
  );
}

export default App;
