import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App(){
  let [myData , setMyData] = useState("")
  function getData(data){
    setMyData(data)
  }
  return(
    <>

    <div className="parentComp">
      <h1>Parent Component</h1>
      <p>Value accepted : {myData}</p>
      <div className="childComp">
       <Child getData = {getData}/>
      </div>
    </div>
    
    

    
    </>
  )

  }
 

export default App;
