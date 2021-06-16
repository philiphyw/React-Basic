import React from 'react'

const SinglePerson = (props) => {
    const{id,name,age,image} = props;
    return (
        <div className="name-tag" id={id}>
            <img className="portrait-sm" src={image} alt={name}/>
            <div>
            <p>{name}</p>
            <p>{age}</p>
            </div>
        </div>
    )
}

export default SinglePerson
