import React, { useEffect } from 'react';
import { TableRow, TableCell } from '@material-ui/core';

// helpers 
import { setProfitLossSign, usdFormatter } from '../../../helpers/helpers';

// hooks 
import useStyles from './coinList.styles';
import { useSelector, useDispatch } from 'react-redux';

// components 
import DoubleRowCell from '../DoubleRowCell/DoubleRowCell';

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
        <TableCell align="left">{coinDetails[0].name}</TableCell>
        <TableCell align="right">{coinDetails[0].symbol}</TableCell>
        <TableCell align="right">{usdFormatter.format(avgEntryPrice)}</TableCell>
        <TableCell className={setProfitLossSign(dayChange = "asd", true).startsWith('-') ? classes.loss : classes.gain} align="right">{setProfitLossSign(dayChange = "asd", true)}</TableCell>
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