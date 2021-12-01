import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';

import { getCoins, getPortfolioAverage, fetchPricesCoinData } from '../../redux.actions/coinActions';
import { setProfitLossSign, usdFormatter } from '../../helpers/helpers';

import useStyles from './balanceInfo.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import CoinList from './CoinList/CoinList';
import InfoSquare from './InfoSquare/InfoSquare';
import OpenPositions from './OpenPositions/OpenPositions';
import HistoryTransaction from './HistoryTransaction/HistoryTransaction';
import { InfoSquaresWrapper } from '../styledComponents/styledComponents';



const BalanceInfo = ({ setCurrentId }) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [showOpenPositions, setShowOpenPositions] = useState(false);
  const [balanceOfCoins, setBalanceOfCoins] = useState([]);
  const [balance, setBalance] = useState(0);

  const { result } = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    setBalance((state) => {
      if(balanceOfCoins.length === 0) {
        return 0;
      } 
      let balance = balanceOfCoins.reduce((prev, current) => {
        return prev + current
      });
      return balance
    })
  }, [balanceOfCoins]);


  // Balance info calculations
  const currentBalance = balance.toFixed(2);
  const gainBalance = (currentBalance - result?.invested).toFixed(2);
  const gainPercent = ((gainBalance / result?.invested) * 100).toFixed(2);
  // const dayChangeBalance = ((userinfo.baseCapital * userinfo.totalGain) * userinfo.dayChange).toFixed(2);
  // const dayChangePercent = (userinfo.dayChange * 100).toFixed(2);
  // ----------------------
  
  useEffect(() => {

    // jakie są coiny w portfelu? Potrzebne do fetchowania ceny - wymyśleć coś lepszego.
    dispatch(getPortfolioAverage());

  },[dispatch]);

  const transactions = useSelector((state) => state.portfolioAverageReducer);
  const tickersToFetchPrices = transactions.map((transaction) => transaction._id.toUpperCase())

  useEffect(() => {
    dispatch(fetchPricesCoinData(tickersToFetchPrices.toString()));
  }, [dispatch, tickersToFetchPrices]);


  const goBack = () => {
    if(location.pathname === "/application/history" || location.pathname.startsWith("/application/transaction-history")) {
      history.goBack()
    };
  };

  return ( 
    <>
      <Container component="div" className={classes.infoContainer}>
        <Typography variant="h5" className={classes.title}>
          Balance info
        </Typography>

        <InfoSquaresWrapper>
          <InfoSquare title="Base capital:" info={`${usdFormatter.format(result?.invested)}`} />
          <InfoSquare title="Gain / loss balance:" info={`${usdFormatter.format(gainBalance)}`} />
          <InfoSquare title="Current balance:" info={`${usdFormatter.format(currentBalance)}`} percent={`${setProfitLossSign(gainPercent, true)}`} />
          {/* <InfoSquare title="24h change:" info={`${usdFormatter.format(dayChangeBalance)}`} percent={`${setProfitLossSign(dayChangePercent, true)}`} /> */}
        </InfoSquaresWrapper>

        <Typography variant="h5" className={classes.title}>
          {location.pathname === "/application/history" ? "History" : ""}
          {location.pathname === "/application/open-positions" ? "Open positions" : ""}
          {location.pathname === "/application/portfolio-balance" ? "Portfolio" : ""}
          {location.pathname.startsWith("/application/transaction-history")  ? "Coin history" : ""}

          <div className={classes.componentsNavigations}>
            {showOpenPositions ? (
              <Link to='/application/open-positions'>
                <Button className={classes.routeButton} onClick={() => setShowOpenPositions(false)}>
                  [ Open positions ]
                </Button>
              </Link>
            ) : (
              <Link to='/application/portfolio-balance'>
                <Button className={classes.routeButton} onClick={() => setShowOpenPositions(true)}>
                  [ Portfolio ]
                </Button>
              </Link>
            )}      

            <Link to='/application/history'>
              <Button className={`${classes.routeButton} ${classes.historyButton}`} onClick={goBack} >
                {location.pathname === "/application/history" || location.pathname.startsWith("/application/transaction-history") ? "Go back" : "History"}
              </Button>
            </Link>
          </div>

        </Typography>

          
        
        <Switch>
          <Route path="/application/open-positions">
            <OpenPositions setCurrentId={setCurrentId} setBalanceOfCoins={setBalanceOfCoins}/>
          </Route>

          <Route path="/application/portfolio-balance">
            <CoinList />
          </Route>

          <Route path="/application/history">
            <HistoryTransaction />
          </Route>

          <Route path="/application/transaction-history/:ticker">
            <HistoryTransaction />
          </Route>
        </Switch>
        
      </Container>
    </>
   );
}
 
export default BalanceInfo;