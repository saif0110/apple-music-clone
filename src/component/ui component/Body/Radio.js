import { Box, Divider, Typography } from "@mui/material"
import ReactLoading from 'react-loading'

const RadioComponent = () => {
    return (
        <>
            <Box>
                <Typography variant='h4' sx={{ fontWeight: "bold" }}>Radio</Typography>
                <Divider />
                <Box sx={{height: "75vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Typography sx={{fontSize: "14px", color: "green", letterSpacing: "0.5px"}}>Workign to get better experience.</Typography>
                  <ReactLoading type={'bubbles'} color={'green'} height={'30px'} width={'30px'} />
                </Box>
            </Box>
        </>
    )
}

export default RadioComponent