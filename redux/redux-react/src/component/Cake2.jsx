import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import Buy_cakes from '../redux/cake/cakeAction';
function Cake2() {
    const count=useSelector(state=>state.cake.count);
    const fun=useDispatch();
    const [num,setNum]=useState('');
  return (
    <div>
        <input type='number' value={num} onChange={(e)=>setNum(e.target.value.trim())}/>
        <h1>No of cake - {count}</h1>
        <button onClick={()=>fun(Buy_cakes(num))}>reduce count</button>
    </div>
  )
}

export default Cake2