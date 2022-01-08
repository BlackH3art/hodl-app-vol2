import { useEffect } from "react";
import { TableCell, TableRow, Typography } from "@material-ui/core";

import useStyles from "../openPositions.styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TickerLogoMobile from "./TickerLogoMobile";

import { fetchCoinDataFromCMC } from "../../../../redux.actions/coinActions";
import DoubleRowCellMobile from "./DoubleRowCellMobile";
import { usdFormatter } from "../../../../helpers/helpers";

const OpenPositionRowMobile = ({ setCurrentId, index, quantity, price, entryPrice, date, id, ticker, setBalanceOfCoins}) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCoinDataFromCMC(ticker.toUpperCase()));
  }, [dispatch, ticker]);

  const coinsDetails = useSelector((state) => state.coinDetailsReducer);
  const coinDetails = coinsDetails.filter((coin) => coin.symbol === ticker);

  let currentDolarBalance = quantity * price;
  let investedDolarAmount = quantity * entryPrice;
  let dolarGainLoss = currentDolarBalance - investedDolarAmount;
  let percentGainLoss = (((price - entryPrice) / entryPrice) * 100).toFixed(2);

  useEffect(() => {
    setBalanceOfCoins([]);
    if(currentDolarBalance) {
      setBalanceOfCoins((prevState) => {
        return [...prevState, currentDolarBalance];
      });
    }
  }, [setBalanceOfCoins, currentDolarBalance]);

  return (
    <>
      <TableRow>
        <TableCell className={classes.tableCellHead} align="left">
            {++index}
        </TableCell>

        <TableCell className={classes.tableCellMiddle} align="left">
          <TickerLogoMobile logo={coinDetails[0]?.logo} ticker={ticker} name={coinDetails[0]?.name}  />
        </TableCell>

        <TableCell className={classes.tableCellMiddle} align="right">
          <DoubleRowCellMobile preText={true} pre1="now:" pre2="open:" text1={usdFormatter.format(price)} text2={usdFormatter.format(entryPrice)}/>
        </TableCell>
      </TableRow>
    </>
  )
}

export default OpenPositionRowMobile;