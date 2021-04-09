import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell } from '@material-ui/core';

import useStyles from './historyTransaction.styles';

const HistoryTransaction = () => {

  const classes = useStyles();

  return ( 
    <>
      <Container component="div" className={classes.historyTransactionsContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left"><Typography className={classes.tableHead}> # </Typography></TableCell>
              <TableCell align="left"><Typography className={classes.tableHead}> Ticker</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Type </Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Price</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Quantity</Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Invested </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Gain </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Date </Typography></TableCell>
            </TableRow>
          </TableHead>


        </Table>

      </Container>
    </>
   );
}
 
export default HistoryTransaction;