import {
    Avatar,
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography
} from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SensorsIcon from '@mui/icons-material/Sensors';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import btnAction from '../../../redux-store/Sidebar/btnAction';
import { useState } from 'react';
import searchAction from '../../../redux-store/searchbar/searchAction';
import CancelIcon from '@mui/icons-material/Cancel';

const buttonStyle = {
    textTransform: "none",
    justifyContent: "left",
    color: "black"
}

const SideBar = () => {

    const dispatch = useDispatch()
    const searchValue = useSelector(state => state.searchMusic.value)
    const btnClicked = useSelector(state => state.sidebarBtnClick.name)
    const [value, setValue] = useState("")

    const handleSearchChange = (event) => {
        setValue(event.target.value);
        dispatch(searchAction(event.target.value))
        dispatch(btnAction(""))
    }
    const handleBtnClick = (name) => {
        dispatch(btnAction(name))
    }

    const handleSearchMakeEmptyClick = ()=>{
        setValue("");
        dispatch(searchAction(""))
        dispatch(btnAction(""))
    }
    const btnName = typeof btnClicked === 'string' ? btnClicked : 'browse';

    return (
        <Box sx={{ border: "1px solid lightgray", height: "99.7vh" }}>
            <Box pt={2} pl={3} pr={3} sx={{ borderBottom: "1px solid lightgray" }}>
                <Box display={"flex"}>
                    <AppleIcon />
                    <Typography sx={{ fontSize: "24px", fontWeight: "bold", position: "relative", bottom: "3px" }}>Music</Typography>
                </Box>
                <TextField
                    id="search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ pl: "5px" }}>
                                <SearchIcon fontSize='small' />
                            </InputAdornment>
                        ),
                        endAdornment: (searchValue && searchValue.length > 0) && (
                            <div onClick={handleSearchMakeEmptyClick} style={{
                                cursor: "pointer"
                            }}>
                                <InputAdornment position="end" sx={{ pl: "5px" }} >
                                    <CancelIcon fontSize='small' sx={{ color: 'gray' }} />
                                </InputAdornment>
                            </div>
                        ),
                        disableUnderline: true,
                        sx: { fontSize: "13px" }
                    }}
                    variant="standard"
                    sx={{ border: "1px solid lightgray", borderRadius: "3px" }}
                    value={value}
                    onChange={handleSearchChange}
                />
                <Box pt={1} pb={1}>
                    <Button onClick={() => { handleBtnClick("listenow") }} sx={{ ...buttonStyle, "&:hover": { backgroundColor: btnName === 'listenow' ? "#e0e0e0" : "" }, backgroundColor: btnName === 'listenow' ? "#e0e0e0" : "" }} fullWidth={true} startIcon={<PlayCircleOutlineIcon sx={{ color: "#d60017" }} />}>Listen now</Button>
                    <Button onClick={() => { handleBtnClick("browse") }} sx={{ ...buttonStyle, "&:hover": { backgroundColor: btnName === 'browse' ? "#e0e0e0" : "" }, backgroundColor: btnName === 'browse' ? "#e0e0e0" : "" }} fullWidth={true} startIcon={<GridViewIcon sx={{ color: "#d60017" }} />}>Browse</Button>
                    <Button onClick={() => { handleBtnClick("radio") }} sx={{ ...buttonStyle, "&:hover": { backgroundColor: btnName === 'radio' ? "#e0e0e0" : "" }, backgroundColor: btnName === 'radio' ? "#e0e0e0" : "" }} fullWidth={true} startIcon={<SensorsIcon sx={{ color: "#d60017" }} />}>Radio</Button>
                </Box>
            </Box>
            <Box pl={3} pr={3}>
                <Box pt={1} pb={1}>
                    <Button sx={{ ...buttonStyle, color: "#bdbdbd", letterSpacing: "-0.5px" }} fullWidth="true" startIcon={
                        <Box sx={{
                            border: "2px solid #bdbdbd", height: "25px", width: "25px",
                            borderRadius: "18px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <FontAwesomeIcon icon={faMusic} size="xs" />
                        </Box>
                    }
                        endIcon={
                            <CallMadeIcon sx={{ position: "relative", left: "-7px", bottom: "3px" }} />
                        }
                    >
                        Open in Music
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default SideBar