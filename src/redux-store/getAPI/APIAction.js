import { FETCH_API_REQUEST } from "./APIActionType";
import { FETCH_API_SUCCESS } from "./APIActionType";
import { FETCH_API_FAILURE } from "./APIActionType";
import axios from 'axios'
const fetchAPIRequest = ()=>{
    return {
        type: FETCH_API_REQUEST
    }
}
const fetchAPISuccess = (value)=>{
    return {
        type: FETCH_API_SUCCESS,
        payload: value
    }
}
const fetchAPIFailure = (error)=>{
    return {
        type: FETCH_API_FAILURE,
        payload: error
    }
}

const fetchAPI = ()=>{
    return function (dispatch){
        dispatch(fetchAPIRequest());
        axios.get('https://academics.newtonschool.co/api/v1/music/song', {
            headers: {
              'projectId': 'g86s9b4gxqfi',
            },
            params: {
              limit: '100',
            }
          })
        .then((response)=>{
            const value = response.data;
            console.log("response: ", value);
            dispatch(fetchAPISuccess(value))
        })
        .catch((error) => {
            dispatch(fetchAPIFailure(error.message))
        })

    }
}

export { fetchAPIRequest, fetchAPISuccess, fetchAPIFailure, fetchAPI }