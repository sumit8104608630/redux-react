import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import action from '../redux/icecream/Action'
function IceCream() {
    const counts=useSelector(state=>state.icecream.counts)
    const fun=useDispatch()
  return (
    <div>
        <h1>IceCream count : {counts}</h1>
        <button onClick={()=>fun(action())}> reduce IceCream</button>
    </div>
  )
}

export default IceCream