import { Buy_cake } from "./ActionType"
const Buy_cakes=(num=1)=>{
    return{
        type:Buy_cake,
        payLoad:num
    }
}

export default Buy_cakes