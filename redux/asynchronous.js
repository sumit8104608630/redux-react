// Create the action types
const FETCH_DATA = 'FETCH_DATA';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Import Redux and middleware
const redux = require('redux');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').default;
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

// Define initial state
const initialState = {
    loading: false,
    data: [],
    error: ''
};

// Action creators
const fetchRequest = () => {
    return {
        type: FETCH_DATA,
    };
};

const fetchDataSuccess = (users) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: users
    };
};

const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    };
};

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Async action creator using thunk middleware
function fetchData() {
    return function (dispatch) {
        dispatch(fetchRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                const users = res.data.map(user => user.title);
                dispatch(fetchDataSuccess(users));
            })
            .catch((err) => {
                dispatch(fetchDataFailure(err.message));
            });
    };
}

// Subscribe to store updates
store.subscribe(() => console.log(store.getState()));

// Dispatch the async action
store.dispatch(fetchData());


// there is some error in this code  