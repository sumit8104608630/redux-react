import React from 'react'
//import { Buy_cake } from '../redux/cake/ActionType'
import { connect } from 'react-redux'
import Buy_cakes from '../redux/cake/cakeAction'
function Cake(props) {
   
  return (
    <div>
        <h1>Cake count : {props.counts}</h1>
        <button onClick={props.Buy_cake}>reduce cake</button>
    </div>
  )
}
const mapStateToProps=state=>{
    return{
        counts:state.cake.count,
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        Buy_cake:()=>dispatch(Buy_cakes())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Cake)