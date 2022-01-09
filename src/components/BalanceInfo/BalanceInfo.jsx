import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faWallet, faRectangleList } from '@fortawesome/free-solid-svg-icons';

import { getPortfolioAverage, fetchPricesCoinData } from '../../redux.actions/coinActions';
import { setProfitLossSign, usdFormatter } from '../../helpers/helpers';

import useStyles from './balanceInfo.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import useWindowSize from '../../helpers/useWindowSize';

import CoinList from './CoinList/CoinList';
import InfoSquare from './InfoSquare/InfoSquare';
import OpenPositions from './OpenPositions/OpenPositions';
import HistoryTransaction from './HistoryTransaction/HistoryTransaction';
import { InfoSquaresWrapper, InfoRowWrapper } from '../styledComponents/styledComponents';
import InfoRow from './MobileView/InfoRow/InfoRow';




const BalanceInfo = ({ setCurrentId }) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [showOpenPositions, setShowOpenPositions] = useState(false);
  const [balanceOfCoins, setBalanceOfCoins] = useState([]);
  const [balance, setBalance] = useState(0);
  const user = useSelector(state => state.authReducer.data);
  const [width] = useWindowSize();

  useEffect(() => {
    //fix this
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
  const gainBalance = (currentBalance - user?.result.invested).toFixed(2);
  const gainPercent = ((gainBalance / user?.result.invested) * 100).toFixed(2);
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

  const baseCapitalToUSD = usdFormatter.format(user?.result.invested);
  const gainBalanceToUSD = usdFormatter.format(gainBalance);
  const currentBalanceToUSD = usdFormatter.format(currentBalance);

  return ( 
    <>
      <Container component="div" className={classes.infoContainer}>
        <Typography variant="h5" className={classes.title}>
          Balance info
        </Typography>

        {width > 500 ? 
          (<InfoSquaresWrapper>
            <InfoSquare title="Base capital:" info={`${baseCapitalToUSD}`} />
            <InfoSquare title="Gain / loss balance:" info={`${gainBalanceToUSD}`} />
            <InfoSquare title="Current balance:" info={`${currentBalanceToUSD}`} percent={`${setProfitLossSign(gainPercent, true)}`} />
            {/* <InfoSquare title="24h change:" info={`${usdFormatter.format(dayChangeBalance)}`} percent={`${setProfitLossSign(dayChangePercent, true)}`} /> */}
          </InfoSquaresWrapper>
          ) : (
            <InfoRowWrapper>
              <InfoRow title="Current Balance" info={`${currentBalanceToUSD}`} percent={`${setProfitLossSign(gainPercent, true)}`} primeInfo={true} />
              <hr />
              <InfoRow title="Gain / Loss" info={`${gainBalanceToUSD}`} />
              <hr />
              <InfoRow title="Base Capital" info={`${baseCapitalToUSD}`} />
              <hr />
            </InfoRowWrapper>
          )
        }

        <div className={classes.titleButtonsContainer}>
          <Typography variant="h5" className={classes.title}>
            {location.pathname === "/application/history" ? "History" : ""}
            {location.pathname === "/application/open-positions" ? "Open positions" : ""}
            {location.pathname === "/application/portfolio-balance" ? "Portfolio" : ""}
            {location.pathname.startsWith("/application/transaction-history")  ? "Coin history" : ""}
          </Typography>

          <div className={classes.componentsNavigations}>
            {showOpenPositions ? (
              <Link className={classes.componentLink} to='/application/open-positions'>
                <Button className={classes.routeButton} onClick={() => setShowOpenPositions(false)}>
                  {width > 500 ? "[ Open positions ]" : (<FontAwesomeIcon size="lg" icon={faRectangleList} />)}
                  
                </Button>
              </Link>
            ) : (
              <Link className={classes.componentLink} to='/application/portfolio-balance'>
                <Button className={classes.routeButton} onClick={() => setShowOpenPositions(true)}>
                  {width > 500 ? "[ Portfolio ]" : (<FontAwesomeIcon size="lg" icon={faWallet} />)}

                </Button>
              </Link>
            )}      

            <Link className={classes.componentLink} to='/application/history'>
              <Button className={`${classes.routeButton} ${classes.historyButton}`} onClick={goBack} >
                {width > 500 ? (
                  location.pathname === "/application/history" || location.pathname.startsWith("/application/transaction-history") ? "Go back" : "History"
                ) : (
                  location.pathname === "/application/history" || location.pathname.startsWith("/application/transaction-history") ? (<FontAwesomeIcon size="lg" icon={faArrowLeft} />) : (<HistoryOutlinedIcon />)
                )}
              </Button>
            </Link>
          </div>
        </div>


        
        <Switch>
          <Route path="/application/open-positions" render={() => (
            user ? <OpenPositions width={width} setCurrentId={setCurrentId} setBalanceOfCoins={setBalanceOfCoins}/> : <Redirect to='/auth'/>
          )}>
          </Route>

          <Route path="/application/portfolio-balance" render={() => (
            user ? <CoinList width={width} /> : <Redirect to='/auth'/>
          )}>
          </Route>

          <Route path="/application/history" render={() => (
            user ? <HistoryTransaction width={width} /> : <Redirect to='/auth'/>
          )}>
          </Route>

          <Route path="/application/transaction-history/:ticker" render={() => (
            user ? <HistoryTransaction width={width} /> : <Redirect to='/auth'/>
          )}>
          </Route>

          <Redirect to="/application/open-positions" />
        </Switch>
        
      </Container>
    </>
   );
}
 
export default BalanceInfo;