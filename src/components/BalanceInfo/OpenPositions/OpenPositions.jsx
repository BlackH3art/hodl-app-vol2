import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

import * as api from "../../../api"

// components
import OpenPositionRow from './OpenPositionRow/OpenPositionRow';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';

// hooks
import useStyles from './openPositions.styles';
import { useSelector } from 'react-redux';


const OpenPositions = ({ setCurrentId, setBalanceOfCoins, width }) => {

  const classes = useStyles();
  const coinsPriceData = useSelector((state) => state.coinDetailsReducer);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {

    async function fetchTransactions() {
      const { data } = await api.fetchPortfolio();

      setTransactions(data);
    }

    fetchTransactions();

  },[]);


  return ( 
    <>
      <Container component="div" className={classes.openTransactionsContainer}>
        <Table>
          {width > 500 ? (
            <>
              <TableHead>
                <TableRow>
                  <TableCell align="left"><Typography className={classes.tableHead}> # </Typography></TableCell>
                  <TableCell align="left" width="8%"><Typography className={classes.tableHead}> Ticker</Typography></TableCell>
                  <TableCell align="center"><Typography className={classes.tableHead}> Price </Typography></TableCell>
                  <TableCell align="right" width="12%"><Typography className={classes.tableHead}> Capital</Typography></TableCell>
                  <TableCell align="center"><Typography className={classes.tableHead}> Change </Typography></TableCell>
                  <TableCell align="center"><Typography className={classes.tableHead}> P&L (%) </Typography></TableCell>
                  <TableCell align="center"><Typography className={classes.tableHead}> Close position </Typography></TableCell>
                  <TableCell align="right"><Typography className={classes.tableHead}> Actions </Typography></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {transactions ? transactions.map((transaction, index) => {

                  let coinPrice = coinsPriceData.find((coin) => coin.symbol === transaction.ticker.toUpperCase());

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
                )}) : (
                  <TableRow>
                    <TableCell align="center" colSpan={8}>
                      <LoadingIndicator />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </>

          ) : (
            <>
              Other view
            </>
          )}

            
        </Table>

      </Container>
    </>
   );
}
 
export default OpenPositions;