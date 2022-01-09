import { useEffect, useState } from "react";
import { TableCell, TableRow, Typography, IconButton, Collapse, Table } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import useStyles from "../openPositions.styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TickerLogoMobile from "./TickerLogoMobile";

import { fetchCoinDataFromCMC } from "../../../../redux.actions/coinActions";
import DoubleRowCellMobile from "./DoubleRowCellMobile";
import { cryptoAmountFormatter, setProfitLossSign, usdFormatter } from "../../../../helpers/helpers";

const OpenPositionRowMobile = ({ setCurrentId, index, quantity, price, entryPrice, date, id, ticker, setBalanceOfCoins}) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);

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
          <DoubleRowCellMobile 
            preText={true} 
            pre1="now:" 
            pre2="open:" 
            text1={usdFormatter.format(price)} 
            text2={usdFormatter.format(entryPrice)}
          />
        </TableCell>

        <TableCell className={classes.tableCellMiddle}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Typography className={classes.unwindHeader}>
              Details
            </Typography>
            <Table size="small" aria-label="purchases">


                <TableRow>
                  <TableCell className={classes.mainThhext} variant="head">capital: </TableCell>
                  <TableCell align="right">
                    <DoubleRowCellMobile 
                      text1={usdFormatter.format(currentDolarBalance)} 
                      text2={`${cryptoAmountFormatter((quantity)?.toFixed(6))} ${ticker}`} 
                      text2class={classes.secondaryTxt}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className={classes.maihhnText} variant="head">change: </TableCell>
                  <TableCell align="right">
                    <DoubleRowCellMobile 
                      preText={true} 
                      pre1="change:" 
                      pre2="invested:" 
                      text1={setProfitLossSign(dolarGainLoss)} 
                      text2={usdFormatter.format(investedDolarAmount)} 
                      text1class={setProfitLossSign(dolarGainLoss).startsWith('-') ? classes.loss : classes.gain}
                    />
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className={classes.maihhnText} variant="head">P&L (%): </TableCell>
                  <TableCell align="right" className={`${setProfitLossSign(percentGainLoss).startsWith('-') ? classes.loss : classes.gain} ${classes.singleRowInfo}`}>
                    {setProfitLossSign(percentGainLoss, true)}
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className={classes.maihhnText} variant="head">actions: </TableCell>
                  <TableCell>

                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className={classes.maihhnText} variant="head">sell form: </TableCell>
                </TableRow>

                
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>

    </>
  )
}

export default OpenPositionRowMobile;