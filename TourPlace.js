import React from 'react'
import {GiBowman,GiTargetDummy} from 'react-icons/gi'
import './Tour.css'

const TourPlace = ({place,filterPlaces,fetchPlaces}) => {
    return (
        <div>
      {
          place.length !==0 ?(
            <section>
            <h3> Top Visiting Places In Bangladesh</h3>
            <div className='manteer'>
                <span className='man'><GiBowman/></span>
                <span className='teer'>-</span>
                <span className='target'><GiTargetDummy/></span>
                </div>
            
            <div className='underline'></div>
         <div className='wrapperPlace'>
             {
                place.map((place,i)=>{
                     const {name,price,img,id} = place
                     return(
                         <div key={i} className='imgpricename'>
                           <img src={img} alt=''/>
                           <footer className='footer'>
                               <p className='namefooter'> {name}</p>
                               <p><span className='visit'>Visit Cost:</span> ${price}</p>
                               <button onClick={()=>filterPlaces(id)}>Not Interested <span>X</span></button>
                           </footer>
                         </div>
                     )
                 })
             }
         </div>
      </section>
          ) :
          <div className='task'>
               <p className='notask'>No Visiting Places Available</p>
              <button onClick={()=>fetchPlaces()}>Click to Refresh This Page</button>
          </div>
      }
      </div>
    )
}

export default TourPlace
