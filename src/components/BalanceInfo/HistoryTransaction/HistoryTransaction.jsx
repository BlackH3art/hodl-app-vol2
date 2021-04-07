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
              <TableCell align="left" width="10%"><Typography className={classes.tableHead}> Ticker</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Price </Typography></TableCell>
              <TableCell align="right" width="12%"><Typography className={classes.tableHead}> Capital</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Profit / loss</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> % </Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Close position </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Actions </Typography></TableCell>
            </TableRow>
          </TableHead>


        </Table>

      </Container>
    </>
   );
}
 
export default HistoryTransaction;