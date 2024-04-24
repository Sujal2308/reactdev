import { useState , useEffect } from "react";
import "./App.css";

let App = () => {
  let [userEmail , setUserEmail] = useState("")
  let [pass , setPass] = useState("")
  let [userObj , setUserObj] =useState([])
  function dataSubmit(e){
    e.preventDefault();
    //preventing unnessesary rendering of comp on submit the form for fetching data
    let dataObj = {email : userEmail , password : pass}  
    setUserObj([...userObj,dataObj])
    console.log(dataObj)
    
  }
  return (
    <>
      
      <form onSubmit={dataSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email"
        onChange={(e)=>setUserEmail(e.target.value)}
        value={userEmail}
        ></input> <br></br>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password"
        onChange={(e)=>setPass(e.target.value)}
        value={pass}
        autoComplete="off"
        ></input>
        <button type="submit">Submit</button>
      </form>
      {
        userObj.map((data)=>{
          return(
            <>
              <h1>Welcome {data.email}</h1>
            </>
          )
        })
      }
    </>
  );
};

export default App;
