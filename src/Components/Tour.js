import { useState } from "react";

function Tour({ Data , DeleteTour }){

    // DeleteTour(null);
    
    const [Inf,SetInf] = useState( Data?.info.substring(0, 200) + '...');
    
    const [ReadShow , SetRead ] = useState('Read More');

    return (

        <div className="tour" >
            <img src= {Data?.image} alt = ""></img>
            <div className="tour-details" >
                <h4 className="price" >{  "₹ " + Data?.price}</h4>
                <h4 className="city" >{Data?.name}</h4>
                <div>{Inf} <span className="read-show" onClick= {()=>{ 
                    if(ReadShow === 'Read More' ){SetRead('Show Less'); SetInf( Data?.info ); }
                    else {SetRead('Read More'); SetInf( Data?.info.substring(0,200) + '...') ;  }
                    }} >{ReadShow}</span> </div>
            </div>
            <button className="not-interested-button" onClick={()=>{ DeleteTour(Data?.id) }} >Not Interested</button>
        </div>
    );
}



export default Tour;