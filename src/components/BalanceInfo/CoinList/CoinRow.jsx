import React, { useEffect } from 'react';
import { TableRow, TableCell } from '@material-ui/core';

// helpers 
import { setProfitLossSign, usdFormatter } from '../../../helpers/helpers';

// hooks 
import useStyles from './coinList.styles';
import { useSelector, useDispatch } from 'react-redux';

// components 
import DoubleRowCell from '../DoubleRowCell/DoubleRowCell';
import TickerLogo from '../OpenPositions/OpenPositionRow/TickerLogo';
import PreTxtDoubleRowCell from '../OpenPositions/PreTxtDoubleRowCell/PreTxtDoubleRowCell';

// action
import { fetchCoinDataFromCMC } from '../../../redux.actions/coinActions';


const CoinRow = ({ index, ticker, avgEntryPrice, quantitySum, price, dayChange }) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinDataFromCMC(ticker.toUpperCase()));
  }, [dispatch, ticker]);

  const coinsDetails = useSelector((state) => state.coinDetailsReducer);
  const coinDetails = coinsDetails.filter((coin) => coin.symbol === ticker);

  let percentagePNL = (((price - avgEntryPrice) / avgEntryPrice) * 100).toFixed(2);
  let balancePNL = setProfitLossSign((quantitySum * price) - (quantitySum * avgEntryPrice));
  let gainOrLossColor = setProfitLossSign(percentagePNL, true).startsWith('-') ? classes.loss : classes.gain;

  return ( 
    <>
      <TableRow >
        <TableCell align="left">{++index}</TableCell>
        <TableCell align="left">
          <TickerLogo logo={coinDetails[0]?.logo} name={coinDetails[0]?.name} />
        </TableCell>
        <TableCell align="right">{coinDetails[0]?.symbol}</TableCell>
        <TableCell align="right">
          <PreTxtDoubleRowCell 
            firstPre={'current:'}
            firstRow={usdFormatter.format(price)} 
            secondPre={'entry:'}
            secondRow={usdFormatter.format(avgEntryPrice)}
            preClassName={classes.secondaryTxt}
          />
        </TableCell>
        <TableCell className={dayChange?.toFixed(2).toString().startsWith('-') ? classes.loss : classes.gain} align="right">{dayChange?.toFixed(2).toString()}%</TableCell>
        <TableCell align="right">7days</TableCell>
        <TableCell align="right">
          <DoubleRowCell 
            firstRow={balancePNL} 
            secondRow={setProfitLossSign(percentagePNL, true)}
            secondRowClassName={gainOrLossColor}
          />
        </TableCell>
        <TableCell align="right">actions</TableCell>
      </TableRow>
    </>
   );
}
 
export default CoinRow;