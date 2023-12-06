import { INSERT_LIST } from "./playType"

const playMusicAction = (list)=>{
    return {
        type: INSERT_LIST,
        payload: list
    }
}

export default playMusicAction