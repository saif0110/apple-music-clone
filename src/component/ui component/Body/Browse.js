import { Box, Divider, Typography } from "@mui/material";
import OurTopPlaylist from "./OurTopPlaylist";
import Carousel from "react-multi-carousel";
import MoreToShow from "../footer/MoreToShow";
import Footer from "../footer/footer";
import BodyHelper from "./bodyHelper";
import { useSelector } from "react-redux";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Browse = () => {
    const list = useSelector(state => state.getAPI.items)
    const data = list.data;
    return (
        <>
            <Box>
                <Typography variant='h4' sx={{ fontWeight: "bold" }}>Browse</Typography>
                <Divider />
                <Carousel responsive={responsive}>
                    {
                        data ? (
                            data.slice(0, 10).map((list, index) => (
                                <BodyHelper list={list} index={index} key={index} />
                            ))
                        ) : (false) // show loading state
                    }
                </Carousel>
            </Box>
            <Box mt={5}>
                <OurTopPlaylist title={'Our Top Playlists'} rangeStarts={11} rangeEnds={31} />
            </Box>
            <Box mt={5}>
                <OurTopPlaylist title={'Now in spatial audio'} rangeStarts={32} rangeEnds={52} />
            </Box>
            <Box mt={5}>
                <OurTopPlaylist title={'New Music'} rangeStarts={53} rangeEnds={73} />
            </Box>
            <Box mt={0}>
                <OurTopPlaylist title={'Discover More'} rangeStarts={74} rangeEnds={94} />
            </Box>
            <Box mt={5}>
                <MoreToShow />
            </Box>
            <Box mt={5}>
                <Footer />
            </Box>
        </>
    )
}

export default Browse