import {
    Box,
    Grid,
    
} from '@mui/material'
import SideBar from './Sidebar/sidebar'
import Body from './Body/body'
import Header from './Header/header'
const PutAllTogether = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container height={"100vh"}>
                <Grid item xs={12} sm={2.25} md={2.25} lg={2.25} height={"100vh"}>
                    <SideBar />
                </Grid>
                <Grid item md={9.75} lg={9.75} height={"100vh"}>
                    <Grid item xs={12} sm={12} md={12} lg={12} height={"8.3vh"}>
                        <Header />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} height={'91.7vh'} sx={{overflowY: "scroll"}}>
                        <Body />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PutAllTogether

