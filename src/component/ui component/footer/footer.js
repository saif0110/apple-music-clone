import { Box, Typography } from "@mui/material"


const Footer = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    gap: "12px"
                }}>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px" }}>United States</Typography>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#9e9e9e" }}>{`Español (Mexico)`}</Typography>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#9e9e9e" }}>عَرَبيّ</Typography>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#9e9e9e" }}>Pycckий</Typography>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#9e9e9e" }}>{`Française (France)`}</Typography>
            </Box>
            <Box pt={2}>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#9e9e9e" }}>Copyright © 2023 <span>Apple Inc.</span> All right reserved</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: "12px"
                }}>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#9e9e9e" }}>Internet Service Terms</Typography>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#9e9e9e" }}>Apple Music and Privacy</Typography>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#9e9e9e" }}>Cookie Warning</Typography>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#9e9e9e" }}>Support</Typography>
                <Typography sx={{ fontSize: "11.5px", letterSpacing: "0.5px", color: "#9e9e9e" }}>Feedback</Typography>
            </Box>
        </Box>
    )
}

export default Footer