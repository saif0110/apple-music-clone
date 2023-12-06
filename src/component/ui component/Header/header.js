import React, { useEffect, useRef } from 'react';
import {
    Box, Button, IconButton, Slider, Stack, Typography
} from '@mui/material'
import '../../../App.css'
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PauseIcon from '@mui/icons-material/Pause';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';

import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './header.css'
import SignInUp from './SignInUp';

const buttonStyle = {
    textTransform: "none",
    border: "none",
    outline: "none",
    height: "26px",
    fontSize: "12px",
    "&:hover": {
        backgroundColor: "#d60017",
        color: "white"
    }
}

const Header = () => {
    const list = useSelector(state => state.playMusic.list)
    const [playRepeat, setPlayRepeat] = useState(0)
    const [shuffle, setShuffle] = useState(false)
    const [volumeValue, setVolumeValue] = useState(30)
    const [toggle, setToggle] = useState(false)
    const [pause, setPause] = useState(false)
    const [currentTime, setCurrentTime] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progressBarValue, setProgressBarValue] = useState(0);
    const [hide, setHide] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    // create reference
    const audioEl = useRef(null)
    const progressBar = useRef(null)
    const volumeRef = useRef(null)

    const handleVolumeChange = (event) => {
        setVolumeValue(event.target.value)
        if (audioEl && audioEl.current) {
            audioEl.current.volume = volumeValue / 100;
        }
    }
    const handlePlayPauseClick = () => {
        setPause(!pause)
        if (!pause) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    }
    const handleMenuClick = () => {
        setToggle(!toggle)
    }
    const handlePlayRepeat = () => {
        if (playRepeat === 2) {
            setPlayRepeat(0)
        } else {
            setPlayRepeat(playRepeat + 1)
        }
    }
    const handleShuffleClick = () => {
        setShuffle(!shuffle)
    }

    // calculate current time..
    const calculate = (sec) => {
        const minute = Math.floor(sec / 60);
        const second = Math.floor(sec % 60);
        const returnedSecond = second < 10 ? `0${second}` : `${second}`;
        return `${minute}:${returnedSecond}`
    }
    const changeProgress = (event) => {
        audioEl.current.currentTime = event.target.value;
        progressBar.current.value = event.target.value;
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / audioEl.current.duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    const handleNextClick = () => {
        setCurrentSongIndex(currentSongIndex + 1);
        if (currentSongIndex > list.artist[0].songs.length - 1) {
            setCurrentSongIndex(0);
        }
        if(!pause){
            setPause(true)
        }
    }
    const handlePrevClick = () => {
        setCurrentSongIndex(currentSongIndex - 1);
        if (currentSongIndex < 0) {
            setCurrentSongIndex(0);
        }
        if(!pause){
            setPause(true)
        }
    }

    const handleTimeUpdate = (event)=>{
        if(event.currentTarget.currentTime == 0){
            setPause(true)
        }
        setProgressBarValue(event.currentTarget.currentTime);
        setCurrentTime(event.currentTarget.currentTime);
        if(event.currentTarget.currentTime >= audioEl.current.duration){
            setPause(false)
            setHide(true);
        }else{
            setHide(false);
        }
    }
    return (
        <Box display={'flex'} justifyContent={'space-around'} sx={{ border: "1px solid lightgray", padding: "5px"}} >
            <audio 
            src={`https://newton-project-resume-backend.s3.amazonaws.com/audio/${list && list.appType && list.artist[0].songs[currentSongIndex] ? list && list.appType && list.artist[0].songs[currentSongIndex] : '64cf94e147ae38c3e33a721d'}.mp3`} 
            ref={audioEl} autoPlay
            onTimeUpdate={handleTimeUpdate}></audio>
            <Box display={'flex'} justifyContent={'space-between'} width={'80%'}>
                <Stack direction={'row'} width={'16%'} justifyContent={'space-between'} sx={{ color: "gray", ml: 5 }}>
                    <IconButton disableRipple sx={{ padding: "0px" }} disabled={!list.appType ? true : false} onClick={handleShuffleClick}>
                        {
                            shuffle ? (<ShuffleIcon fontSize="small" sx={{ color: "#d60017" }} />) : (<ShuffleIcon fontSize="small" />)
                        }
                    </IconButton>
                    <IconButton disableRipple sx={{ padding: "0px" }} disabled={!list.appType ? true : false} onClick={handlePrevClick}>
                        <FastRewindIcon fontSize="medium" />
                    </IconButton>
                    <IconButton onClick={handlePlayPauseClick} disabled={!list.appType ? true : false}>
                        {
                            pause ? (
                                <PauseIcon fontSize="medium" />
                            ) : (
                                <PlayArrowIcon fontSize="medium" />
                            )
                        }
                    </IconButton>
                    <IconButton disableRipple sx={{ padding: "0px" }} disabled={!list.appType ? true : false} onClick={handleNextClick}>
                        <FastForwardIcon fontSize="medium" />
                    </IconButton>
                    <IconButton disableRipple sx={{ padding: "0px" }} disabled={!list.appType ? true : false} onClick={handlePlayRepeat}>
                        {
                            playRepeat === 0 ? (<RepeatIcon fontSize="small" />) : (playRepeat === 1 ? <RepeatIcon fontSize="small" sx={{ color: "#d60017" }} /> : (<RepeatOneIcon fontSize="small" sx={{ color: "#d60017" }} />))
                        }
                    </IconButton>
                </Stack>
                <Box display="flex" sx={{ height: "40px", width: "50%", border: "1px solid lightgray" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "10%", borderRight: "1px solid lightgray", backgroundColor: "#ebeaea" }}>
                        {
                            list.appType && !hide ?  (
                                <div className='display-player-img'
                                    style={{
                                        backgroundImage: `url(${list.thumbnail})`,
                                    }}></div>
                            ) : (<FontAwesomeIcon icon={faMusic} size='lg' className="header-music-icon" />)
                        }
                    </Box>
                    <Box sx={{ width: "90%" }}>
                        {
                            list.appType && !hide ? (
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                                    <Typography sx={{ fontSize: "12px", fontWeight: "bold", letterSpacing: "0.5px", color: '#616161' }}>{list.artist[0].name.toUpperCase()}</Typography>
                                    <Typography sx={{ fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px", color: "gray" }}>{`${list.title.substring(0, 30).toUpperCase()} - ${list.featured ? list.featured.toUpperCase() : ''} - ${list.mood ? list.mood.toUpperCase() : ''}`}</Typography>
                                    <Box sx={{
                                        borderRadius: "3px",
                                        width: "50px",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        letterSpacing: "0.3px",
                                        backgroundColor: "#d60017",
                                        color: "white",
                                        position: "relative",
                                        bottom: "14px",
                                        left: "87%"
                                    }}>PREVIEW</Box>
                                    <Slider ref={progressBar} size="small" sx={{
                                        width: "70%",
                                        color: "gray",
                                        width: "100%",
                                        position: "relative",
                                        bottom: "24px"
                                    }} onChange={changeProgress} value={progressBarValue} step={0.01}
                                    max={ (audioEl && audioEl.current && audioEl.current.duration) ? audioEl.current.duration : 100}/>
                                    <Typography sx={{
                                        fontSize: "11px",
                                        color: "gray",
                                        position: "relative",
                                        right: "182px",
                                        bottom: "54px"
                                    }}>{calculate(currentTime)}</Typography>
                                </Box>
                            ) : (
                                <Box sx={{ height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <AppleIcon sx={{ color: "gray" }} />
                                </Box>
                            )
                        }
                    </Box>
                </Box>
                <Stack direction="row" width={"11%"} justifyContent={'space-around'} alignItems="center" sx={{ height: "40px", color: "gray" }} mr={5}>
                    {
                        volumeValue >= 70 ? (
                            <VolumeUpIcon fontSize='small' />
                        ) : (

                            ((volumeValue < 70) && (volumeValue !== 0)) ? (
                                <VolumeDownIcon fontSize='small' />
                            ) : (
                                <VolumeMuteIcon fontSize='small' />
                            )

                        )
                    }
                    <Slider ref={volumeRef} size="small" sx={{ width: "70%", color: "gray" }} aria-label="Volume" value={volumeValue} onChange={handleVolumeChange} />
                </Stack>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} width="12%" height="40px" alignItems={'center'}>
                <Button startIcon={<ListIcon />} sx={{ color: "gray", height: "26px", minWidth: "0px", width: "30px", paddingLeft: "20px" }} onClick={handleMenuClick}></Button>
                <Button startIcon={<PersonIcon />} sx={{ ...buttonStyle, backgroundColor: "#d60017", color: "white" }} onClick={()=>{setShowDialog(true)}}>
                    Sign  In
                </Button>
                {
                    showDialog ? (
                        <SignInUp dialog={{showDialog, setShowDialog}}/>
                    ) : (false)
                }
            </Box>
        </Box >
    )
}

export default React.memo(Header)