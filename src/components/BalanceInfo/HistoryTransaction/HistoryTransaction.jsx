import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell } from '@material-ui/core';

import useStyles from './historyTransaction.styles';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as api from '../../../api/index';
import { getHistoryItemsDetails } from '../../../redux.actions/historyActions';

import HistoryItemRow from './HistoryItemRow';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';

const HistoryTransaction = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const { ticker } = useParams();
  const [historyItemsFromDB, setHistoryItemsFromDB] = useState(null);

  useEffect(() => {

    async function fetchTransactionHistory() {

      const { data } = await api.fetchHistoryItems();

      setHistoryItemsFromDB(data);
    } 

    fetchTransactionHistory();
  }, []);


  const historyTickersToFetch = historyItemsFromDB?.map(item => item.ticker.toUpperCase());

  let historyItemsToDisplay = historyItemsFromDB;

  if(ticker) {
    historyItemsToDisplay = historyItemsFromDB?.filter((item) => item.ticker === ticker.toLowerCase())
  }

  useEffect(() => {
    dispatch(getHistoryItemsDetails(historyTickersToFetch));
  });

  return ( 
    <>
      <Container component="div" className={classes.historyTransactionsContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left"><Typography className={classes.tableHead}> # </Typography></TableCell>
              <TableCell align="left" width="12%"><Typography className={classes.tableHead}> Ticker</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Type </Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Date </Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Price</Typography></TableCell>
              <TableCell align="center" width="20%"><Typography className={classes.tableHead}> Quantity</Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Invested </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Gain </Typography></TableCell>
            </TableRow>
          </TableHead>
          {historyItemsToDisplay ? historyItemsToDisplay.map((item, index) => (
            <HistoryItemRow 
              key={index}
              index={index}
              ticker={item.ticker.toUpperCase()}
              type={item.type}
              entryPrice={item.entryPrice}
              sellingPrice={item.sellingPrice}
              quantity={item.quantity}
              sellingQuantity={item.sellingQuantity}
              openDate={item.openDate}
              closeDate={item.closeDate}
              invested={item.invested}
              gain={item.gain}
            />
          )) : (
            <TableRow>
              <TableCell align="center" colSpan={8}>
                <LoadingIndicator />
              </TableCell>
            </TableRow>
          )}

        </Table>

      </Container>
    </>
   );
}
 
export default HistoryTransaction;