import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

let App = () => {
  let [demo, setDemo] = useState(1);
  return (
    <>
      {/* Shortcircuit Evaluation */}
      {demo && <><Button /></>}
    </>
  );
};

export default App;
