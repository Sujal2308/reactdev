import { useState , useEffect } from "react";
function Cards(props) {
 let [cardsData , setCardsData] = useState([])
 let fetchedData = async()=>{
  let rawData = await fetch("https://jsonplaceholder.typicode.com/photos");
   setCardsData(await rawData.json()) 
  console.log(jsonData)
 }
 useEffect(
  () => {
     fetchedData();
  },

 [])
  return (
    <>
    
    <div className="container">
      {
        cardsData.map((card)=>{
          let {id , url , title} = card;
          return(
            <div className="content-container" key={id}>
             <div>
              <img className="card-img" src= {url} alt="" />
             </div>
             <div> 
             <h2>{id}</h2>
             <p>{title}</p>
             </div>
            
            </div>

          )
        })
      }
    </div>

   
    </>
  );
}

export default Cards;
