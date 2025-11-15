import React from 'react'

const Child = (props) => {
  return (
    <div>
        <input type='text' onChange={(e)=>{
            props.setname(e.target.value)
        }}>
           
        </input>
        <p>running child component  {props.name} </p>
    </div>
  )
}

export default Child