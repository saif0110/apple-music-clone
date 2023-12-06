import { Typography, div } from "@mui/material"
import './body.css'
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import playMusicAction from '../../../redux-store/header/playAction';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import searchAction from "../../../redux-store/searchbar/searchAction";
import btnAction from "../../../redux-store/Sidebar/btnAction";

const OurTopPlaylistItemContainer = ({ list }) => {

    // redux hooks
    const dispatch = useDispatch()

    // handle state
    const [showPlayButtonAndDot, setShowPlayButtonAndDot] = useState(false)
    const [mouseEnteredToPlayCircle, setMouseEnteredToPlayCircle] = useState(false)
    const [playButtonClicked, setPlayButtonClicked] = useState(false)
    const [mouseEnteredToDotCircle, setMouseEnteredToDotCircle] = useState(false)
    const [textOvering, setTextOvering] = useState(false)
    const btnClicked = useSelector(state =>  state.sidebarBtnClick.name)

    const handlePlayClick = (list) => {
        setPlayButtonClicked(true);
        dispatch(playMusicAction(list))
        if(btnClicked===""){
            dispatch(btnAction(""))
        }
    }

    return (
        <div>

            <div className='item-small-container'
                style={{
                    width: "185px",
                    height: "185px",
                    border: "1px solid gray",
                    borderRadius: "11px",
                    backgroundImage: `url(${list.thumbnail})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                onMouseEnter={() => { setShowPlayButtonAndDot(true) }}
                onMouseLeave={() => { setShowPlayButtonAndDot(false) }}>
                {
                    showPlayButtonAndDot ? (
                        <div className="playBtnAndDOts">
                            <div
                                onMouseEnter={() => { setMouseEnteredToPlayCircle(true) }}
                                onMouseLeave={() => { setMouseEnteredToPlayCircle(false) }}
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    borderRadius: "20px",
                                    backgroundColor: mouseEnteredToPlayCircle || playButtonClicked ? "#d60017" : "rgb(186, 186, 186)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                onClick={() => { handlePlayClick(list) }}>
                                <PlayArrowIcon sx={{ color: "white" }} fontSize='medium' />
                            </div>
                            <div
                                onMouseEnter={() => { setMouseEnteredToDotCircle(true) }}
                                onMouseLeave={() => { setMouseEnteredToDotCircle(false) }}
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    borderRadius: "20px",
                                    backgroundColor: mouseEnteredToDotCircle ? "#d60017" : "rgb(186, 186, 186)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <MoreHorizIcon sx={{ color: 'white' }} />
                            </div>
                        </div>
                    ) : (false)
                }
            </div>
            <div className={textOvering ? "textOvers": "normal"}
            onMouseEnter={()=>{setTextOvering(true); setShowPlayButtonAndDot(true)}}
            onMouseLeave={()=>{setTextOvering(false); setShowPlayButtonAndDot(false)}}>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "black", paddingTop: "5px" }}>{`${list.title.substring(0, 32)}..`}</Typography>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#bdbdbd" }}>{list.artist[0].name}</Typography>
            </div>
        </div>
    )
}

export default OurTopPlaylistItemContainer;