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
      <Swatches click={click} />
      <button onClick={clickHandler}>Get new colors</button>
    </>
  );
}

export default App;
