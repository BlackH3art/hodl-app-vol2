import React, { useEffect } from 'react';
import { Typography, TableRow, TableCell, TableBody } from '@material-ui/core';

// components
import DoubleRowCell from '../../DoubleRowCell/DoubleRowCell';
import PreTxtDoubleRowCell from '../PreTxtDoubleRowCell/PreTxtDoubleRowCell';
import InputsDoubleRowCell from '../InputsDoubleRowCell/InputsDoubleRowCell';
import TickerLogo from './TickerLogo';

// helpers
import { setProfitLossSign, usdFormatter  } from '../../../../helpers/helpers';
import { timeFormatter } from '../../../../helpers/helpers';

// hooks
import useStyles from '../openPositions.styles';
import { useDispatch, useSelector } from 'react-redux';

// icons
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

//actions
import { deleteTransaction, fetchCoinDataFromCMC } from '../../../../redux.actions/coinActions';



const OpenPositionRow = ({ setCurrentId, index, quantity, price, entryPrice, date, id, ticker }) => {
  
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinDataFromCMC(ticker.toUpperCase()));
  }, [dispatch, ticker]);

  const coinsDetails = useSelector((state) => state.coinDetailsReducer);
  const coinDetails = coinsDetails.filter((coin) => coin.symbol === ticker);


  const d = new Date(date)
  const formatedDate = `${d.toLocaleDateString()} - ${timeFormatter(d.getHours())}:${timeFormatter(d.getMinutes())}`;

  let currentDolarBalance = quantity * price;
  let investedDolarAmount = quantity * entryPrice;
  let dolarGainLoss = currentDolarBalance - investedDolarAmount;
  let percentGainLoss = (((price - entryPrice) / entryPrice) * 100).toFixed(2)

  return ( 
    <>
      <TableBody>
        <TableRow >
          <TableCell align="left" className={classes.dateCellContainer}>
            <Typography className={classes.transactionDate}>{formatedDate}</Typography>
            {++index}
          </TableCell>
          <TableCell align="left" className={classes.secondaryTxt} > 
            <TickerLogo logo={coinDetails[0]?.logo} ticker={ticker} />
          </TableCell>

          <TableCell align="right">
            <PreTxtDoubleRowCell 
              firstPre={'current:'}
              firstRow={usdFormatter.format(price)} 
              secondPre={'entry:'}
              secondRow={usdFormatter.format(entryPrice)}
              preClassName={classes.secondaryTxt}

            />
          </TableCell>
          <TableCell align="right" >
            <DoubleRowCell 
              firstRow={usdFormatter.format(currentDolarBalance)} 
              secondRow={`${(quantity)?.toFixed(6)} ${ticker}`}
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
              id={id}
              ticker={ticker}
            />
          </TableCell>
          <TableCell align="right"  >
            <div className={classes.actionButtonContainer}>
              <button className={classes.actionButtons} onClick={() => setCurrentId(id)}>
                <EditOutlinedIcon />
              </button>
              <button className={classes.actionButtons}>
                <HistoryOutlinedIcon />
              </button>
              <button className={classes.actionButtons} onClick={() => dispatch(deleteTransaction(id))}>
                <DeleteOutlineOutlinedIcon />
              </button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
   );
}
 
export default OpenPositionRow;