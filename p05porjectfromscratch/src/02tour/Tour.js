import React ,{useState}from 'react'

const Tour = ({id,price,image,info,name,removeTour}) => {
//set useState to preseve the value to show/hide detial
const [showDetial, setShowDetail] = useState(false)
    return (
       <>
        <div className="tour-card">
            <img src = {image} alt={name}></img>
            <div className="tour-detail">
            <h3 className="tour-title">{name}</h3>
            <p>{price}</p>
            <p>{showDetial?info:info.substring(0,150)}<button onClick={()=>setShowDetail(!showDetial)}>{showDetial?"Show Less":"Read More"}</button></p>
            </div>
            <button onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
       </>
    )
}

export default Tour
