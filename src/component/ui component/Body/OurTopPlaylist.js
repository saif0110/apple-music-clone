import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import OurTopPlaylistItemContainer from "./OurTopPlaylistItemContainer";
import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

const OurTopPlaylist = ({title, rangeStarts, rangeEnds})=>{
    const list = useSelector(state => state.getAPI.items)
    const data = list.data
    return (
        <Box>
            <Typography sx={{fontSize: "20px", fontWeight: "bold", letterSpacing: '0.3px'}}>{title}</Typography>
            <Carousel responsive={responsive}>
            {
              data ? (
                data.slice(rangeStarts, rangeEnds).map((list, index) => (
                  <OurTopPlaylistItemContainer list={list} key={index}/>
                ))
              ) : (false) // show loading state
            }
          </Carousel>
        </Box>
    )
}

export default OurTopPlaylist