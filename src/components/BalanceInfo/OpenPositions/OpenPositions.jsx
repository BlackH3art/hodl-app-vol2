import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

// helpers
import { transactionList } from '../../../helpers/pseudoData';
import { setProfitLossSign, usdFormatter  } from '../../../helpers/helpers';

//actions
import { deleteTransaction } from '../../../redux.actions/coinActions';

// components
import DoubleRowCell from '../DoubleRowCell/DoubleRowCell';
import PreTxtDoubleRowCell from './PreTxtDoubleRowCell/PreTxtDoubleRowCell';
import InputsDoubleRowCell from './InputsDoubleRowCell/InputsDoubleRowCell';

// icons
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

// hooks
import useStyles from './openPositions.styles';
import { useSelector, useDispatch } from 'react-redux';

const OpenPositions = ({ setCurrentId }) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.coinReducer);


  const openPositions = transactions.map((transaction, index) => {

    let currentDolarBalance = transaction.quantity * transaction.price;
    let investedDolarAmount = transaction.quantity * transaction.entryPrice;
    let dolarGainLoss = currentDolarBalance - investedDolarAmount;
    let percentGainLoss = (((transaction.price - transaction.entryPrice) / transaction.entryPrice) * 100).toFixed(2)

    
    return (
      <TableRow key={index} >
        <TableCell align="left" className={classes.dateCellContainer}>
          <Typography className={classes.transactionDate}>{transaction.date}</Typography>
          {++index}
        </TableCell>
        <TableCell align="left"className={classes.secondaryTxt} >{transaction.ticker}</TableCell>

        <TableCell align="right">
          <PreTxtDoubleRowCell 
            firstPre={'current:'}
            firstRow={usdFormatter.format(transaction.price)} 
            secondPre={'entry:'}
            secondRow={usdFormatter.format(transaction.entryPrice)}
            preClassName={classes.secondaryTxt}

          />
        </TableCell>
        <TableCell align="right" >
          <DoubleRowCell 
            firstRow={usdFormatter.format(currentDolarBalance)} 
            secondRow={`${(transaction.quantity)?.toFixed(6)} ${transaction.ticker}`}
            secondRowClassName={classes.cryptoAmount}
          />
        </TableCell>
        <TableCell align="right">
          <PreTxtDoubleRowCell 
            firstPre={'change:'}
            firstRow={setProfitLossSign(dolarGainLoss)} 
            secondPre={'invested:'}
            secondRow={usdFormatter.format(investedDolarAmount)}
            firstRowClassName={setProfitLossSign(dolarGainLoss).startsWith('-') ? classes.loss : classes.gain}
            preClassName={classes.secondaryTxt}
          />
        </TableCell>
        <TableCell align="left" className={setProfitLossSign(percentGainLoss).startsWith('-') ? classes.loss : classes.gain}><Typography> {setProfitLossSign(percentGainLoss, true)} </Typography></TableCell>
        <TableCell align="right">
          <InputsDoubleRowCell 
            id={transaction._id}
            ticker={transaction.ticker}
          />
        </TableCell>
        <TableCell align="right"  >
          <div className={classes.actionButtonContainer}>
            <button className={classes.actionButtons} onClick={() => setCurrentId(transaction._id)}>
              <EditOutlinedIcon />
            </button>
            <button className={classes.actionButtons}>
              <HistoryOutlinedIcon />
            </button>
            <button className={classes.actionButtons} onClick={() => dispatch(deleteTransaction(transaction._id))}>
              <DeleteOutlineOutlinedIcon />
            </button>
          </div>
        </TableCell>
      </TableRow>
    )});

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
          <TableBody>
            {openPositions}
          </TableBody>
        </Table>

      </Container>
    </>
   );
}
 
export default OpenPositions;