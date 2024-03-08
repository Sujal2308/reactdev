import { useState } from 'react'
import './App.css'


function App() {
 let[counterBtn , setCounterBtn] = useState(0)
 function btnClick(){
  if(counterBtn <=9){
    setCounterBtn(counterBtn+1)
  }
 }
 function removeNum(){
  setCounterBtn(counterBtn -1)
  if(counterBtn == 0){
    setCounterBtn(null)
  }
}


  return (
    <>
      <h1>{counterBtn}</h1>
     <button onClick={btnClick}>Count</button>
     <button style={{marginLeft : "25px"}} onClick={removeNum}>Remove</button>
    </>
  );
}

export default App
