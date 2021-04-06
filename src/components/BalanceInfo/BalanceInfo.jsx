import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';

import { getCoins } from '../../redux.actions/coinActions';
import { setProfitLossSign, usdFormatter } from '../../helpers/helpers';
import { userinfo } from '../../helpers/pseudoData';

import useStyles from './balanceInfo.styles';
import { useDispatch } from 'react-redux';

import CoinList from './CoinList/CoinList';
import InfoSquare from './InfoSquare/InfoSquare';
import OpenPositions from './OpenPositions/OpenPositions';
import { InfoSquaresWrapper } from '../styledComponents/styledComponents';



const BalanceInfo = ({ setCurrentId }) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [showOpenPositions, setShowOpenPositions] = useState(false)

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
          {!showOpenPositions ? 'Open positions' : 'Portfolio'}
          {showOpenPositions ? (
            <Link to='/open-positions'>
              <Button className={classes.routeButton} onClick={() => setShowOpenPositions(false)}>
                [ Open positions ]
              </Button>
            </Link>
          ) : (
            <Link to='/portfolio-balance'>
              <Button className={classes.routeButton} onClick={() => setShowOpenPositions(true)}>
                [ Portfolio ]
              </Button>
            </Link>
          )}
        </Typography>

        
        <Switch>
          <Route path="/open-positions">
            <OpenPositions setCurrentId={setCurrentId} />
          </Route>

          <Route path="/portfolio-balance">
            <CoinList />
          </Route>
        </Switch>
        
      </Container>
    </>
   );
}
 
export default BalanceInfo;