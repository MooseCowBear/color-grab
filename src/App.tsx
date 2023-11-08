import { useState } from "react";
import "./App.css";
import Swatches from "./components/Swatches";

function App() {
  const [click, setClick] = useState<boolean>(false);
  const [unit, setUnit] = useState<string>("hex");

  const colorClickHandler = () => {
    setClick((click) => !click);
  };

  const unitClickHandler = () => {
    switch (unit) {
      case "rgb":
        setUnit("hsl");
        break;
      case "hsl":
        setUnit("hex");
        break;
      default:
        setUnit("rgb");
    }
  };

  const nextUnit = (): string => {
    switch (unit) {
      case "rgb":
        return "hsl";
      case "hsl":
        return "hex";
      default:
        return "rgb";
    }
  };

  return (
    <>
      <div className="header">
        <h1>Color Grab</h1>
        <button onClick={unitClickHandler}>{`switch to ${nextUnit()}`}</button>
      </div>
      <Swatches click={click} unit={unit} />
      <button onClick={colorClickHandler}>Get new colors</button>
    </>
  );
}

export default App;
