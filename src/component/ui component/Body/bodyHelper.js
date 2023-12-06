import React, { useState } from 'react';
import Header from '../Header/header';
import './body.css'
import {
    Box,
    Typography,

} from '@mui/material'
import { useDispatch } from 'react-redux';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import playMusicAction from '../../../redux-store/header/playAction';
const textStyle = {
    fontSize: "16px",
    letterSpacing: "0.5px",
    color: "gray"
  }
const BodyHelper = ({ list, index }) => {
    const dispatch = useDispatch()
    const [showPlayButton, setShowPlayButton] = useState(false)
    const [playButtonClicked, setPlayButtonClicked] = useState(false)
    const [mouseEnteredToPlayCircle, setMouseEnteredToPlayCircle] = useState(false)

    const handlePlayClick = (list)=>{
        setPlayButtonClicked(true);
        dispatch(playMusicAction(list))
    }

    return (
        <div>
            <div>
                <Typography sx={{ ...textStyle, color: "black", paddingTop: "12px" }}>{list.title}</Typography>
                <Typography sx={textStyle} pb={1}>Apple Music</Typography>
            </div>
            <div className='container' style={{
                backgroundImage: `url(${list.thumbnail})`,
            }}
                onMouseEnter={() => { setShowPlayButton(true) }}
                onMouseLeave={() => { setShowPlayButton(false) }}>
                <Box
                    sx={{
                        padding: "12px",
                        position: "relative",
                        top: "220px",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                    <Box sx={{ width: "350px" }}>
                        <Typography sx={{ color: "white", fontSize: "12px", letterSpacing: "0.6px", fontWeight: "400" }}>{list.artist[0].description.substring(0, 80)}</Typography>
                    </Box>
                    {
                        (showPlayButton || playButtonClicked) && (
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
                        )
                    }
                </Box>
            </div>
        </div>
    )
}

export default BodyHelper;