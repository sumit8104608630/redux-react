import React, { useState,useMemo,useCallback } from 'react'
import Child from './Child'

function Parent() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')

const memoClick=useCallback(()=>{},[])
const Name=useMemo(()=>name,[name])
    console.log("parent component "+name);
  return (
    <>
    <div>Parent</div>
    <button onClick={()=>setCount(prev=>prev+1)}>Count : {count}</button>
    <button onClick={()=>setName("sumit")}>sumit</button>
    <Child name={Name} handelClick={memoClick} />
    </>
  )
}

export default Parent