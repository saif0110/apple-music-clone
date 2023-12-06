import { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import {
  Box
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPI } from '../../../redux-store/getAPI/APIAction';
import Browse from './Browse';
import RadioComponent from './Radio';
import ListenNow from './ListenNow';
import ReactLoading from 'react-loading';
import btnAction from '../../../redux-store/Sidebar/btnAction';
import SearchResult from './searchResult';

const Body = () => {

  // handle redux operation
  const dispatch = useDispatch();
  const list = useSelector(state => state.getAPI.items)
  const btnClicked = useSelector(state => state.sidebarBtnClick.name)
  const data = list.data;

  useEffect(() => {
    dispatch(fetchAPI())
    dispatch(btnAction("browse"))
  }, [])

  return (
    <Box sx={{ border: "1px solid lightgray" }}>
      <Box m={4}>
        {
          btnClicked === "" ? (
            <SearchResult />
          ) : (
            btnClicked === 'radio' ? (
              <RadioComponent />
            ) : (
              btnClicked === 'listenow' ? (
                <ListenNow />
              ) : (
                data ? (
                  <Browse />
                ) : ( //loading component
                  <Box sx={{ height: "81.5vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ReactLoading type={'spokes'} color={'gray'} height={'25px'} width={'25px'} />
                  </Box>
                )
              )
            )
          )
        }
      </Box>
    </Box >
  )
}

export default Body



