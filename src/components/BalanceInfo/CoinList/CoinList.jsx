import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

import { coinList } from '../../../helpers/pseudoData';
import { setProfitLossPercentageSign, usdFormatter } from '../../../helpers/helpers';

import useStyles from './coinList.styles';
import { useSelector } from 'react-redux';

const CoinList = () => {

  const classes = useStyles();
  const coins = useSelector((state) => state.coinReducer);


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
            {coinList.map((coin, index) => (
              <TableRow key={coin.name} >
                <TableCell align="left">{++index}</TableCell>
                <TableCell align="left">{coin.name}</TableCell>
                <TableCell align="right">{coin.ticker}</TableCell>
                <TableCell align="right">{usdFormatter.format(coin.price)}</TableCell>
                <TableCell className={setProfitLossPercentageSign(coin.dayChange).startsWith('-') ? classes.loss : classes.gain} align="right">{setProfitLossPercentageSign(coin.dayChange)}</TableCell>
                <TableCell align="right">{coin.last7days}</TableCell>
                <TableCell className={classes.gain} align="right">{setProfitLossPercentageSign(index * 1.5)}</TableCell>
                <TableCell align="right">actions</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Container>
    </>
   );
}
 
export default CoinList;