import { FETCH_API_REQUEST, FETCH_API_SUCCESS, FETCH_API_FAILURE } from "./APIActionType"
const initialState = {
    loading: false,
    items: [],
    error: ""
}

const APIReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_API_REQUEST: 
            return {
                ...state,
                loading: true,
            }
        case FETCH_API_SUCCESS: 
            return {
                loading: false,
                items: action.payload,
                error: ""
            }
        case FETCH_API_FAILURE: 
            return {
                loading: false,
                items: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default APIReducer
