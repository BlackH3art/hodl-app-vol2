import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import DoubleRowCell from '../DoubleRowCell/DoubleRowCell';

import { coinList } from '../../../helpers/pseudoData';
import { setProfitLossSign, usdFormatter } from '../../../helpers/helpers';

import useStyles from './coinList.styles';
import { useSelector } from 'react-redux';

const CoinList = () => {

  const classes = useStyles();
  const coins = useSelector((state) => state.coinReducer);


  const portfolio = coinList.map((coin, index) => {
              
    // calculate percent of profit or loss
    let percentagePNL = (((coin.price - coin.entryPrice) / coin.entryPrice) * 100).toFixed(2);
    // calculate balance of profit or loss
    let balancePNL = setProfitLossSign((coin.quantity * coin.price) - (coin.quantity * coin.entryPrice));
    // should color be green for profit or red for loss?
    let gainOrLossColor = setProfitLossSign(percentagePNL, true).startsWith('-') ? classes.loss : classes.gain;

    return (
      <TableRow key={coin.name} >
        <TableCell align="left">{++index}</TableCell>
        <TableCell align="left">{coin.name}</TableCell>
        <TableCell align="right">{coin.ticker}</TableCell>
        <TableCell align="right">{usdFormatter.format(coin.price)}</TableCell>
        <TableCell className={setProfitLossSign(coin.dayChange, true).startsWith('-') ? classes.loss : classes.gain} align="right">{setProfitLossSign(coin.dayChange, true)}</TableCell>
        <TableCell align="right">{coin.last7days}</TableCell>
        <TableCell align="right">
          <DoubleRowCell 
          firstRow={balancePNL} 
          secondRow={setProfitLossSign(percentagePNL, true)}
          secondRowClassName={gainOrLossColor}
          />
        </TableCell>
        <TableCell align="right">actions</TableCell>
      </TableRow>
    )})

  return ( 
    <>
      <Container component="div" className={classes.coinListContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left"><Typography className={classes.tableHead}> # </Typography></TableCell>
              <TableCell align="left"><Typography className={classes.tableHead}> Coin </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Ticker</Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Price </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> 24h </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Last 7 days </Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Profit / loss</Typography></TableCell>
              <TableCell align="right"><Typography className={classes.tableHead}> Actions </Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {portfolio}
          </TableBody>
        </Table>

      </Container>
    </>
   );
}
 
export default CoinList;