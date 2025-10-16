import React from 'react'

const Card = ({img,name,description}) => {
  return (
    <>
    <div className='outer-card'>
        <div className='card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>   
            <button>View Profile</button>
        </div>
          </div>
    </>
  )
}

export default Card