import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';

import { getCoins } from '../../redux.actions/coinActions';
import { setProfitLossSign, usdFormatter } from '../../helpers/helpers';
import { userinfo } from '../../helpers/pseudoData';

import useStyles from './balanceInfo.styles';
import { useDispatch } from 'react-redux';

import CoinList from './CoinList/CoinList';
import InfoSquare from './InfoSquare/InfoSquare';
import { InfoSquaresWrapper } from '../styledComponents/styledComponents';



const BalanceInfo = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

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
          <InfoSquare title="Current balance:" info={`${usdFormatter.format(currentBalance)}`} percent={`${setProfitLossSign(gainPercent, true)}`} />
          <InfoSquare title="24h change:" info={`${usdFormatter.format(dayChangeBalance)}`} percent={`${setProfitLossSign(dayChangePercent, true)}`} />
        </InfoSquaresWrapper>

        <Typography variant="h5" className={classes.title}>
          Portfolio
        </Typography>
        <CoinList /> 
      </Container>
    </>
   );
}
 
export default BalanceInfo;