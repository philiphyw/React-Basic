import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
    return(
      <div>
         {tours.map(t=>{
             return(
             <div key={t.id}>
              <Tour key={t.id} {...t} removeTour={removeTour}/>  
              </div>
             )
         })}
      </div>
    )
  
};

export default Tours
