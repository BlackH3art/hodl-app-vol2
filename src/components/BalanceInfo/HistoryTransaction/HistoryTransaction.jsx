import React, { useEffect } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell } from '@material-ui/core';

import useStyles from './historyTransaction.styles';
import { useDispatch, useSelector } from 'react-redux';

import { getHistoryItems } from '../../../redux.actions/historyActions';

import HistoryItemRow from './HistoryItemRow';

const HistoryTransaction = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const historyItems = useSelector((state) => state.historyReducer);
  console.log(historyItems[0]);

  useEffect(() => {
    dispatch(getHistoryItems())
  }, [dispatch]); 


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
          {historyItems.map((item, index) => (
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