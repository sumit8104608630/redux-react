//let see how to fetch data in redux
// first we will require all requirement 
const { default: axios } = require("axios");
const redux =require("redux")
const createStore = redux.legacy_createStore;
const applyMiddleware=redux.applyMiddleware;
const thunkMiddleware= require("redux-thunk").thunk;

const FETCH_REQUEST="FETCH_REQUEST";
const FETCH_SUCCESS="FETCH_SUCCESS";
const FETCH_FAILURE="FETCH_FAILURE";

const initial_state={
    loading:false,
    user:[],
    error:""
}

const fetch_request=()=>{
   return{ type:FETCH_REQUEST
}
}
const fetch_success=(user)=>{
    return{ type:FETCH_SUCCESS,payload:user}
}
const fetch_failure=(error)=>{
    return{ type:FETCH_FAILURE,payload:error}
}

// let create the reducer;
const reducer=(state=initial_state,action)=>{
    switch(action.type){
        case FETCH_REQUEST:return{
            ...state,
            loading:true
        }
        case FETCH_SUCCESS:return{
            ...state,
            loading:false,
            user:action.payload,
        }
        case FETCH_FAILURE:return{
            ...state,
            loading:false,
            error:action.payload,
        }
        default :return state
    }
}
const fetch_data=()=>{
    return function(dispatch){
        dispatch(fetch_request())
        axios('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            let user=res.data.map((item)=>item["title"])
            dispatch(fetch_success(user))
        })
        .catch((err)=>{
            dispatch(fetch_failure(err.message))
        })
    }
}
// let create the store

const store=createStore(reducer,applyMiddleware(thunkMiddleware));
//console.log(store.getState());
store.subscribe(()=>console.log("updated State",store.getState()));
store.dispatch(fetch_data())

