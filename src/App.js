import React from "react";
import Data from "./data";
import { useState } from "react";
import Tours from "./Components/Tours";


const App = () => {

  const [tour, setTour] = useState(Data);

  function DeleteTour(tourId){
    if(tourId==null)setTour(Data);
    else{
      let newtour = tour.filter((t)=>{return t.id!==tourId});
      setTour(newtour);
    }
  }
  // console.log(tour);

  if(tour.length===0){
    return(
      <div className="no-tours" >
        <h2>No Tours Left</h2>
        <button onClick={()=>{DeleteTour(null)}} >Refresh</button>
      </div>
    )
  }
  else
  return (
    <div className="wrapper" >
      <h2 className="head-title " >Plan with Girish</h2>
      <Tours className="tours"  TourPack = { tour }  DeleteTour = {DeleteTour} ></Tours>
    </div>
  )
};

export default App;
