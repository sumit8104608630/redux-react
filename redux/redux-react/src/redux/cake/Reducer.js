import { Buy_cake } from "./ActionType"

const initialState={
    count:10,
}

const Cake_reducer=(state=initialState,action)=>{
 switch(action.type){
    case Buy_cake:return{
        ...state,
        count:state.count-action.payLoad
    }
    default:return state
 }
}
export default Cake_reducer;  