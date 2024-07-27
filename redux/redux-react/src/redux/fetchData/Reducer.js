import { Fetch_Failure, Fetch_Request, Fetch_Successful } from "./ActionType"

const initialState={
    loading:false,
    title:[],
    error:'',
}
 const reducers=(state=initialState,action)=>{
    switch(action.type){
        case Fetch_Request:
            return{
            ...state,
            loading:true,
        }
        case Fetch_Successful:
            return{
                ...state,
                loading:false,
                title:action.payload,
                error:''
            }
        case Fetch_Failure:
        return{
            ...state,
            loading:false,
            title:[],
            error:action.payload
        }  
        default:return state
 
    }
}
console.log(initialState )
export {reducers};