import { Box, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import OurTopPlaylistItemContainer from "./OurTopPlaylistItemContainer";
import MoreToShow from "../footer/MoreToShow";
import Footer from "../footer/footer";

const SearchResult = () => {

    const searchValue = useSelector(state => state.searchMusic.value)
    const list = useSelector(state => state.getAPI.items)
    const data = list.data;
    let result = [];
    if (searchValue && data) {
        result = data.filter(list => { return list.title.includes(searchValue) })
    }
    return (
        <>
            <Box>
                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Browse Categories</Typography>
                <Divider />
                <Box mt={2} sx={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                    {
                        typeof searchValue === 'string' && searchValue.length > 0 && (
                            result.length > 0 ? result.map((list, index) => (
                                <OurTopPlaylistItemContainer list={list} key={index} />
                            )) : (
                                <Box>
                                    <Typography sx={{fontSize: "16px", fontWeitgh: "bold", letterSpacing: "0.5px" }}>No match found!</Typography>
                                </Box>
                            )
                        )
                    }
                    <Box>
                        <MoreToShow />
                    </Box>
                    <Box>
                        <Footer />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SearchResult;