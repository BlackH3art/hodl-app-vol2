import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';

import { getCoins } from '../../redux.actions/coinActions';

import useStyles from './balanceInfo.styles';
import { useDispatch } from 'react-redux';

import CoinList from './CoinList/CoinList';


const BalanceInfo = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  },[dispatch]);

  return ( 
    <>
      <Container component="div" className={classes.infoContainer}>
        <Typography variant="h4">
          Balance info
        </Typography>
        <CoinList /> 
      </Container>
    </>
   );
}
 
export default BalanceInfo;