import { Buy_IceCream } from "./Type"

const initialState={
    counts:20,
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case Buy_IceCream:return{
            ...state,counts:state.counts-1,
        }
        default:return state
    }
}

export {reducer}