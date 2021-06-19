import React, { useEffect } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell } from '@material-ui/core';

import useStyles from './historyTransaction.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getHistoryItemsDetails } from '../../../redux.actions/historyActions';

import HistoryItemRow from './HistoryItemRow';

const HistoryTransaction = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const { ticker } = useParams();
  const historyItems = useSelector((state) => state.historyReducer);

  const historyTickersToFetch = historyItems.map(item => item.ticker.toUpperCase());

  let historyItemsToDisplay = historyItems;

  if(ticker) {
    historyItemsToDisplay = historyItems.filter((item) => item.ticker === ticker.toLowerCase())
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
          {historyItemsToDisplay.map((item, index) => (
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
          ))}

        </Table>

      </Container>
    </>
   );
}
 
export default HistoryTransaction;