import { useState } from "react";
import "./App.css";

let App = () => {
 let [userName , setUserName] = useState("")
 let [name, setName] = useState("")
 let [userObj , setUserObj] = useState([])
 let formSubmitted =(e) => {
  e.preventDefault();
  setName("Welcome "+userName)
  let newObj = {name : userName}
  setUserObj([...userObj,newObj]) // To store muliple users data object in array
  console.log(newObj)
  setUserName("") 
  // clearing most recent input value on submission
}
  return (
    <>
    <form onSubmit={formSubmitted}>
      <label htmlFor="name">Name </label>
      <input type="text" id="name" 
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      autoComplete="off"
      ></input>
      <button type="submit">Submit</button>
    </form>
        <h1>{name}</h1>
        {/* OR */}
        {/* {
          userObj.map((data,id)=>{
            return(
              <div key={id}>
                <h1>{data.name}</h1>
              </div>
             
            )
          })
        } */}
    </>
  )
  }
  

export default App;
