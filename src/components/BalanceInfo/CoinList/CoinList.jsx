import React, { useEffect } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

// hooks
import useStyles from './coinList.styles';
import { useDispatch, useSelector } from 'react-redux';

// components 
import CoinRow from './CoinRow';

// action 
import { getPortfolioAverage } from '../../../redux.actions/coinActions';


const CoinList = () => {

  const classes = useStyles();
  const coins = useSelector((state) => state.portfolioAverageReducer);
  const coinsPriceData = useSelector((state) => state.coinDetailsReducer);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPortfolioAverage());
  },[dispatch]);


  return ( 
    <>
      <Container component="div" className={classes.coinListContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left"><Typography className={classes.tableHead}> # </Typography></TableCell>
              <TableCell align="left"><Typography className={classes.tableHead}> Coin </Typography></TableCell>
              <TableCell align="left"><Typography className={classes.tableHead}> Ticker</Typography></TableCell>
              <TableCell align="center" width="20%"><Typography className={classes.tableHead}> Price </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> 1h </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> 24h </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> 7 days </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Shares </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Profit / loss</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((coin, index) => {
              
              let coinPrice = coinsPriceData.find((coinData) => coinData.symbol === coin._id.toUpperCase())

              return (
    
              <CoinRow 
                key={index}
                index={index}
                ticker={coin._id.toUpperCase()}
                avgEntryPrice={coin.averagePrice}
                quantitySum={coin.quantitySum}
                price={coinPrice?.price}
                hourChange={coinPrice?.change1h}
                dayChange={coinPrice?.change24h}
                sevenDayChange={coinPrice?.change7d}
              />
                      
            )})}
          </TableBody>
        </Table>

      </Container>
    </>
   );
}
 
export default CoinList;