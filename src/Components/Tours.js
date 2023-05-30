import Tour from './Tour';

function Tours( {TourPack , DeleteTour} ){
    // console.log('abd');
    // console.log(TourPack);
    // console.log(sigle);
    
    return (

        <div className='tours' >
            {
                TourPack.map( (tour) => {return <Tour key={tour.id} Data = {tour}  DeleteTour = {DeleteTour} /> })
            }
        </div>

    );
}

export default Tours;