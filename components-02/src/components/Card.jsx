import React from 'react'

const Card = ({name,age,collage,rollno,city}) => {
  return (
    <>
    <div className='card' style={{marginTop:"2rem" ,width:"20rem" , height:"20rem",backgroundColor:"pink",color:"black",border:"1px solid black",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.5),",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{collage}</p>
        <p>{rollno}</p>
        <p>{city}</p>
    </div>
    </>
  )
}

export default Card