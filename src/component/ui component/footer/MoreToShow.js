import { Box, Button } from "@mui/material";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const styleBtn = {
    color: "#d60017",
    width : "32%",
    height: "55px",
    backgroundColor: "#fce4ec",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "10px",
    textTransform: "none",
    fontSize: "16px",
    letterSpacing: "0.4px",
    "&:hover": {
        backgroundColor: "#fce4ec",
        color: "#d60017",
    }
}
const MoreToShow = ()=>{
    return (
        <Box
        sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px"
        }}>
            <Button
            sx={styleBtn} 
            endIcon={
            <ArrowForwardIosIcon />
            }>Send Free Trials to Friends</Button>
            <Button
            sx={styleBtn} 
            endIcon={
            <ArrowForwardIosIcon/>
            }>Moods and Activities</Button>
            <Button
            sx={styleBtn} 
            endIcon={
            <ArrowForwardIosIcon/>
            }>Music Videos</Button>
            <Button
            sx={styleBtn} 
            endIcon={
            <ArrowForwardIosIcon />
            }>Browse and Genre</Button>
            <Button
            sx={styleBtn} 
            endIcon={
            <ArrowForwardIosIcon/>
            }>Worldwide</Button>
            <Button
            sx={styleBtn} 
            endIcon={
            <ArrowForwardIosIcon />
            }>Spatial Audio</Button>
            <Button
            sx={styleBtn} 
            endIcon={
            <ArrowForwardIosIcon/>
            }>Decades</Button>
            <Button
            sx={styleBtn} 
            endIcon={
            <ArrowForwardIosIcon/>
            }>Charts</Button>

        </Box>
    )
}

export default MoreToShow;