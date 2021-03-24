import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';

import { getCoins } from '../../redux.actions/coinActions';
import { setProfitLossPercentageSign, usdFormatter } from '../../helpers/helpers';

import useStyles from './balanceInfo.styles';
import { useDispatch } from 'react-redux';

import CoinList from './CoinList/CoinList';
import InfoSquare from './InfoSquare/InfoSquare';
import { InfoSquaresWrapper } from '../styledComponents/styledComponents';



const BalanceInfo = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const userinfo = {
    baseCapital: 10000,
    totalGain: 1.5471,
    dayChange: -0.2723
  }

  // Balance info calculations
  const currentBalance = (userinfo.baseCapital * userinfo.totalGain).toFixed(2);
  const gainBalance = (currentBalance - userinfo.baseCapital).toFixed(2);
  const gainPercent = ((gainBalance / userinfo.baseCapital) * 100).toFixed(2);
  const dayChangeBalance = ((userinfo.baseCapital * userinfo.totalGain) * userinfo.dayChange).toFixed(2);
  const dayChangePercent = (userinfo.dayChange * 100).toFixed(2);
  // ----------------------

  useEffect(() => {
    dispatch(getCoins());
  },[dispatch]);

  return ( 
    <>
      <Container component="div" className={classes.infoContainer}>
        <Typography variant="h5" className={classes.title}>
          Balance info
        </Typography>

        <InfoSquaresWrapper>
          <InfoSquare title="Base capital:" info={`${usdFormatter.format(userinfo.baseCapital)}`} />
          <InfoSquare title="Gain / loss balance:" info={`${usdFormatter.format(gainBalance)}`} />
          <InfoSquare title="Current balance:" info={`${usdFormatter.format(currentBalance)}`} percent={`${setProfitLossPercentageSign(gainPercent)}%`} />
          <InfoSquare title="24h change:" info={`${usdFormatter.format(dayChangeBalance)}`} percent={`${setProfitLossPercentageSign(dayChangePercent)}%`} />
        </InfoSquaresWrapper>

        <CoinList /> 
      </Container>
    </>
   );
}
 
export default BalanceInfo;