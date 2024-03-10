import Button from './components/Button'
import DataItems from './components/DataItems'
import './App.css'
import { useState } from 'react'


let App = () => {
  let [count ,setCount] = useState(1)
  let [listData, setListData] = useState([]);

  function generateMoreCards(){
    setCount(count + 1)
    let newCards = [{heading : `Box - ${count}` , text : `This is Box: ${count}`}]
    setListData([...listData,...newCards])
  }



  return (
    <>

      <center><button onClick={generateMoreCards}>Generate</button></center>

      <div className='container'>

        {listData.map((dataItems , value)=>{
          let {heading , text} = dataItems

          return(
           <DataItems key = {value} text = {heading} para = {text}/>
          )

        })}

      </div>
    </>
  );
}


export default App
