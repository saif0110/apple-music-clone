import { INSERT_LIST } from "./playType"

const intitialState = {
    list: {}
}

const playMusicReducer = (state=intitialState, action)=>{
    switch(action.type){
        case INSERT_LIST:
            return {list: action.payload}
        default: return state
    }
}

export default playMusicReducer
