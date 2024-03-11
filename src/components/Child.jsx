
import React , {useState} from 'react'


function Child(props) {
let [name , setName] = useState("")
let formSubmit = (e) => {
    e.preventDefault();
}

function sendData(){
    props.getData(name)

}
  return (
    <>
    <h2>Child Component</h2>
    <form onSubmit={formSubmit}>
        <input placeholder='Enter data' type='text' onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={sendData}>Send</button>
    </form>
    </>
  )
}

export default Child