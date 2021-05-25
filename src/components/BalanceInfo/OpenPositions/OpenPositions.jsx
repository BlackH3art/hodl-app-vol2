import React, { useEffect } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

// components
import OpenPositionRow from './OpenPositionRow/OpenPositionRow';

// hooks
import useStyles from './openPositions.styles';
import { useSelector, useDispatch } from 'react-redux';

// actions
import { getCoins } from '../../../redux.actions/coinActions';


const OpenPositions = ({ setCurrentId, setBalanceOfCoins }) => {

  const classes = useStyles();
  const transactions = useSelector((state) => state.coinReducer);
  const coinsPriceData = useSelector((state) => state.coinDetailsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  },[dispatch]);


  return ( 
    <>
      <Container component="div" className={classes.openTransactionsContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left"><Typography className={classes.tableHead}> # </Typography></TableCell>
              <TableCell align="left" width="8%"><Typography className={classes.tableHead}> Ticker</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Price </Typography></TableCell>
              <TableCell align="right" width="12%"><Typography className={classes.tableHead}> Capital</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Profit / loss</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> % </Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Close position </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Actions </Typography></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
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
                date={transaction.openDate}
                ticker={transaction.ticker.toUpperCase()}
                id={transaction._id}
                setBalanceOfCoins={setBalanceOfCoins}
              />
            )})}
          </TableBody>
        </Table>

      </Container>
    </>
   );
}
 
export default OpenPositions;