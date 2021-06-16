import React from "react";
import SinglePerson from "./SinglePerson";


const List = ({people}) => {

  return(
       <div>
      {people.map((r) => {
       return<>
        <p>
        <SinglePerson {...r}/>
        </p>
       </>   
    })}
  </div>
  )
};

export default List;
