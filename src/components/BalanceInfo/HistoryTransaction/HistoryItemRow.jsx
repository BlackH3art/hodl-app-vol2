import React from 'react';
import { TableRow, TableCell, TableBody } from '@material-ui/core';

import { useSelector } from 'react-redux';

import TickerLogo from '../OpenPositions/OpenPositionRow/TickerLogo';
import PreTxtDoubleRow from '../OpenPositions/PreTxtDoubleRowCell/PreTxtDoubleRowCell';

import useStyles from './historyTransaction.styles';

import { dateFormatter, usdFormatter, cryptoAmountFormatter } from '../../../helpers/helpers';


const HistoryItemRow = ({ index, ticker, type, entryPrice, sellingPrice, quantity, sellingQuantity, openDate, closeDate, invested, gain }) => {

  const classes = useStyles();

  const coinsDetails = useSelector((state) => state.historyItemsDetailsReducer);
  const coinDetails = coinsDetails.filter((coin) => coin.symbol === ticker);


  return ( 
    <>
      <TableBody>
        <TableRow >
          <TableCell align="left">
            {++index}
          </TableCell>

          <TableCell align="left" > 
            <TickerLogo ticker={ticker} logo={coinDetails[0]?.logo} />
          </TableCell>

          <TableCell align="center" className={type === "buy" ? classes.buy : classes.sell}>
            {type}
          </TableCell>

          <TableCell align="right"  >
            <PreTxtDoubleRow 
              firstPre="open:"
              secondPre="close:"
              firstRow={dateFormatter(openDate)}
              secondRow={dateFormatter(closeDate)}
              preClassName={classes.secondaryTxt}     
              firstRowClassName={classes.date}
              secondRowClassName={classes.date}      
            />
          </TableCell>

          <TableCell align="center" >
            <PreTxtDoubleRow 
              firstPre="entry:"
              secondPre="close:"
              firstRow={usdFormatter.format(entryPrice)}
              secondRow={usdFormatter.format(sellingPrice)}
              preClassName={classes.secondaryTxt}
            />
          </TableCell>
          
          <TableCell align="center">
            <PreTxtDoubleRow 
              firstPre="buy:"
              secondPre="sell:"
              firstRow={`${cryptoAmountFormatter(quantity.toFixed(6))} ${ticker}`}
              secondRow={sellingQuantity ? `${cryptoAmountFormatter(sellingQuantity.toFixed(6))} ${ticker}` : `-`}
              preClassName={classes.secondaryTxt}
              firstRowClassName={classes.cryptoAmount}
              secondRowClassName={classes.cryptoAmount}
            />
          </TableCell>

          <TableCell align="right">
            {usdFormatter.format(invested)}
          </TableCell>

          <TableCell align="right">
            {usdFormatter.format(gain) || '-'}
          </TableCell>


        </TableRow>
      </TableBody>
    </>
   );
}
 
export default HistoryItemRow;