import { useState , useEffect } from "react";
import "./App.css";

let App = () => {
 let[count , setCount] = useState(0)
 let [count1 , setCount1]= useState(0)
 // Updating title of web tab
 useEffect(()=>{
 if(count>=1){
  document.title = `Chat-{${count}}` // updating title in real time on btn click
 }else{
  document.title = "Chat"
 }
 },[count])

  return (
    <>
       <button onClick={()=>setCount(count+1)}>Click {count}</button>
       <button onClick={()=>setCount1(count1+1)}>Click {count1}</button>
      
    </>
  )
  }
  

export default App;
