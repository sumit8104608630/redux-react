import { Fetch_Failure, Fetch_Request, Fetch_Successful } from "./ActionType"
import axios from "axios"
export const fetch_request=()=>{
    
    return{
        type:Fetch_Request
    }
}
export const fetch_successful=data=>{
    console.log(data)
    return{
        type:Fetch_Successful,
        payload:data
        
    }
}
export const fetch_failure=err=>{
    console.log(err)
    return{
        type:Fetch_Failure,
        payload:err
    }
}

 const Fetches=()=>{
    return (dispatch)=>{
        dispatch(fetch_request())
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
            const data=res.data
            console.log(data)
            dispatch(fetch_successful(data))
        })
        .catch(error=>dispatch(fetch_failure(error)))
    }
}
export {Fetches}