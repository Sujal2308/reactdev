import { useState , useEffect } from "react";
import "./App.css";

let App = () => {
  let [displayWidth , setDisplayWidth] = useState(window.screen.width)
  function displaySize(){
    setDisplayWidth(window.innerWidth)
  }
  // Implementing cleanUp function
  useEffect(()=>{
    console.log("add")
    window.addEventListener("resize",displaySize)
    return () => {
      console.log("remove")
      window.removeEventListener("resize",displaySize)
    }
  })
   return(
    <>
    <h1>The current size of viewport is : </h1>
    <h2>{displayWidth}</h2>
    </>
   )
  }
  

export default App;
