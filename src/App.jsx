import { useState } from "react";
import "./App.css";

let App = () => {
  let [displayTask, setdisplayTask] = useState([]);

  function addTask() {
   let value = document.getElementById("input-val").value;
   displayTask = [...displayTask , value]
  //  newArr = [...displayTask,value]
    setdisplayTask(displayTask);
  }
    function taskRemover(id) {
      // console.log(id)
      let newArr2 = displayTask.filter((item , index) => {
        return index != id;
      });
      setdisplayTask(newArr2);
    }
 
  return (
    <>
    <center>

    <div className="task-box">
      <div className="input-sec">

      <input id="input-val" type="text"></input>
        <button onClick={addTask}>Add</button>

      </div>
       
        <br></br>
        {displayTask.map((items, index) => {
          return (
            <div key={index} id="task-container">
              <p className="tasks" >
                {items}
              </p>
              <p  onClick={()=>taskRemover(index)} className="taskRemover">{"⨯"}</p >
            </div>
          );
        })}
      </div>

    </center>
   
    </>
  );
};

export default App;
