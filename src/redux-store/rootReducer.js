import { combineReducers } from "redux";
import playMusicReducer from "./header/playReducer";
import APIReducer from "./getAPI/APIReducer";
import btnReducer from "./Sidebar/btnReducer";
import dialogReducer from "./Dialog/dialogReducer";
import searchReducer from "./searchbar/searchReducer";

const rootReducer = combineReducers({
    playMusic: playMusicReducer,
    getAPI: APIReducer,
    sidebarBtnClick: btnReducer,
    showDialog: dialogReducer,
    searchMusic: searchReducer
})

export default rootReducer