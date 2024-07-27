import React from 'react'
import action from '../redux/icecream/Action';
import Buy_cakes from '../redux/cake/cakeAction';
import { connect } from 'react-redux';
function Item(props) {
  return (
    <div>
        <h1>stock of cake : {props.items}</h1>
        <button onClick={props.fun}>remaining cake</button>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>{
    const item=ownProps.cake?state.cake.count:state.icecream.counts;
    return {items:item};
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFun=ownProps.cake?()=>dispatch(Buy_cakes()):()=>dispatch(action())
    return {fun:dispatchFun};
}

export default connect(mapStateToProps,mapDispatchToProps)(Item)