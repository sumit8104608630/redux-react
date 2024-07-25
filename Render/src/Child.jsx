import React from 'react'

function Child(props) {
 
    const {name}=props
    const {handelClick}={props}
    console.log("Child" +name)
  handelClick
  return (
    <>
    <div>Child</div>
    <h1>{name}</h1>
    </>
  )
}

export default Child