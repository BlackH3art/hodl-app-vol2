import React, { useEffect } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell } from '@material-ui/core';

// components
import OpenPositionRow from './OpenPositionRow/OpenPositionRow';

// hooks
import useStyles from './openPositions.styles';
import { useSelector, useDispatch } from 'react-redux';

//actions 
import { fetchPricesCoinData } from '../../../redux.actions/coinActions';


const OpenPositions = ({ setCurrentId }) => {

  const classes = useStyles();
  const transactions = useSelector((state) => state.coinReducer);
  const coinsPriceData = useSelector((state) => state.coinDetailsReducer);
  const dispatch = useDispatch();

  const tickersToFetchPrices = transactions.map((transaction) => transaction.ticker.toUpperCase())

  useEffect(() => {
    dispatch(fetchPricesCoinData(tickersToFetchPrices.toString()))
  }, [dispatch, tickersToFetchPrices]);


  return ( 
    <>
      <Container component="div" className={classes.openTransactionsContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left"><Typography className={classes.tableHead}> # </Typography></TableCell>
              <TableCell align="left" width="10%"><Typography className={classes.tableHead}> Ticker</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Price </Typography></TableCell>
              <TableCell align="right" width="12%"><Typography className={classes.tableHead}> Capital</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Profit / loss</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> % </Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Close position </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Actions </Typography></TableCell>
            </TableRow>
          </TableHead>
            {transactions.map((transaction, index) => {

              let coinPrice = coinsPriceData.find((coin) => coin.symbol === transaction.ticker.toUpperCase())

              return (
              <OpenPositionRow 
                key={index}
                index={index}
                setCurrentId={setCurrentId}
                quantity={transaction.quantity}
                price={coinPrice?.price}
                entryPrice={transaction.entryPrice}
                date={transaction.date}
                ticker={transaction.ticker.toUpperCase()}
                id={transaction._id}
              />
            )})}
        </Table>

      </Container>
    </>
   );
}
 
export default OpenPositions;