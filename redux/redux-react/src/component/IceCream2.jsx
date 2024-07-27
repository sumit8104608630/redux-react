import React from 'react'
import action from '../redux/icecream/Action'
import { connect } from 'react-redux'
function IceCream2(props) {
  return (
    <div>
        <h1>Count IceCream2 : {props.counts}</h1>
        <button onClick={props.buy_icecream}>reduce Count</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return{
        counts :state.icecream.counts,
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buy_icecream:()=>dispatch(action())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCream2)