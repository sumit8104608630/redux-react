// let see how the redux work in node
// first we will import the redux 
const redux=require("redux")
const reduxLogger=require("redux-logger")

// now we will create the store
const createStore=redux.legacy_createStore;
// now we will declare type of action 
const by_bag="by_bag";
const by_bottle="by_bottle";
const applyMiddleWare=redux.applyMiddleware;
const logger=reduxLogger.createLogger()
//  now we will create function and return object in that there will be a type and info
function action(){
    return{
        type:by_bag,
    }
}
function action2(){
    return{
        type:by_bottle,
    }
}
// now we will declare initial amount 
const initialState={
    amount:5000,
    amount2:6000
}
// now we will create reducer function
const reducer_bag=(state=initialState,action)=>{
switch(action.type){
    case by_bag:return{
        ...state,
        amount:state.amount-200,
    }
    default:return state
}
}
// now we will create reducer for bottle
const reducer_bottle=(state=initialState,action)=>{
    switch(action.type){
        case by_bottle:return{
            ...state,
            amount2:state.amount2-200,
        }
        default:return state

    }
}
// let implement middleware 
const rootReducer=redux.combineReducers({
    bag:reducer_bag,
    bottle:reducer_bottle,
})

const store=createStore(rootReducer,applyMiddleWare(logger));
console.log("initial state",store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(action())
store.dispatch(action())
store.dispatch(action2())
store.dispatch(action2())
unsubscribe()
