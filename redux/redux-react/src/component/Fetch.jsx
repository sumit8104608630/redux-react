import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Fetches } from '../redux/fetchData/Action'
function Fetch(props) {
    useEffect(()=>{
        props.fetchUser()
    },[])
    console.log(props.useState)
  return (
    <div>
        <h1>Titles</h1>
        <div>{props.useState.loading?<h1>Loading...</h1>:props.useState.error?<h1>Error</h1>:<ul>{props.useState.title.map((item)=>{
            return <li key={item.id}>{item.title}</li>
        })}</ul>}</div>
    </div>
  )
}
const mapStateToProps=state=>{
   
    return{
        useState:state.users
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        fetchUser:()=>dispatch(Fetches())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Fetch)