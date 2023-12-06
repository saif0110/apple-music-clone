import { Box, Button, Dialog, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AppleIcon from '@mui/icons-material/Apple';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const SignInUp = (props) => {
    const { showDialog, setShowDialog } = props.dialog;
    const [open, setOpen] = useState(showDialog)
    const handleClose = () => {
        setShowDialog(!showDialog)
        setOpen(!showDialog);
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            {/* display close button  */}
            <Box sx={{
                height: "32px",
                width: "32px",
                borderRadius: "15px",
                backgroundColor: "#e0e0e0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "12px",
                "&:hover": {
                    backgroundColor: "#eeeeee",
                    color: "gray",
                    cursor: "pointer"
                }
            }} onClick={()=>{setOpen(!showDialog); setShowDialog(!showDialog)}}>
                <CloseIcon fontSize='medium' sx={{ color: "gray" }} />
            </Box>
            {/* diplay rest of the items */}
            <Box sx={{ width: "600px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <AppleIcon fontSize="large" sx={{ color: "gray" }} />
                <Typography sx={{ fontSize: "30px", lettergSpacing: "0.5px" }}>Sign In or Sign Up</Typography>
                <Typography sx={{ fontSize: "20px", lettergSpacing: "0.5px" }}>Enter your email to get started.</Typography>
                <Box sx={{ textAlign: "center" }} pt={2}>
                    <TextField sx={{ width: "450px" }} label="Email or Apple ID" id="fullWidth" />
                    <Typography pt={1}
                        sx={{
                            fontSize: "16px",
                            color: "#d60017",
                            letterSpacing: "0.3px",
                            "&:hover": {
                                textDecoration: "underline"
                            }
                        }}>Forgot Apple ID or Password?</Typography>
                    <PersonAddIcon fontSize="large" sx={{ color: "#d60017", paddingTop: "15px", paddingBottom: "15px" }} />
                </Box>
                <Box sx={{width: "450px", textAlign: "center"}}>
                    <Typography sx={{ fontSize: "14px", color: "gray", letterSpacing: "0.3px" }}>
                        Your Apple ID information is used to allow you to sign in securely and access
                        your data. Apple records certain data for security, support and reporting
                        purposes. If you agree, Apple may also use your Apple ID information to send you
                        marketing emails and communications, including based on your use of Apple services.
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#d60017", letterSpacing: "0.3px" }}>
                        See how your data is managed...
                    </Typography>
                </Box>
                <Button sx={{
                    textTransform :"none",
                    fontSize: "14px",
                    color: "white",
                    backgroundColor: "#d60017",
                    "&:hover": {
                        backgroundColor: "#d60017",
                        color: "white"
                    },
                    width: "350px",
                    height: "45px",
                    borderRadius: "12px",
                    marginBottom: "20px",
                    marginTop: "12px"
                }}>Continue</Button>
            </Box>
        </Dialog>
    )
}

export default SignInUp;