import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell } from '@material-ui/core';

// components
import OpenPositionRow from './OpenPositionRow/OpenPositionRow';

// hooks
import useStyles from './openPositions.styles';
import { useSelector } from 'react-redux';


const OpenPositions = ({ setCurrentId }) => {

  const classes = useStyles();
  const transactions = useSelector((state) => state.coinReducer);



  return ( 
    <>
      <Container component="div" className={classes.openTransactionsContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left"><Typography className={classes.tableHead}> # </Typography></TableCell>
              <TableCell align="left"><Typography className={classes.tableHead}> Ticker</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Price </Typography></TableCell>
              <TableCell align="right" width="12%"><Typography className={classes.tableHead}> Capital</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Profit / loss</Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> % </Typography></TableCell>
              <TableCell align="center"><Typography className={classes.tableHead}> Close position </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Actions </Typography></TableCell>
            </TableRow>
          </TableHead>
            {transactions.map((transaction, index) => (
              <OpenPositionRow 
                key={index}
                index={index}
                setCurrentId={setCurrentId}
                quantity={transaction.quantity}
                price={transaction.price}
                entryPrice={transaction.entryPrice}
                date={transaction.date}
                ticker={transaction.ticker.toUpperCase()}
                id={transaction._id}
              />
            ))}
        </Table>

      </Container>
    </>
   );
}
 
export default OpenPositions;