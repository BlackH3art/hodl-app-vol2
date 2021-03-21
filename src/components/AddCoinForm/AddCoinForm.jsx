import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core'

import { addTransaction } from '../../redux.actions/coinActions';
import useStyles from './addCoinForm.styles';

const AddTransactionForm = () => {

  const classes = useStyles(); 
  const [coinData, setCoinData] = useState({
    ticker: '',
    quantity: '',
    entryPrice: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTransaction(coinData))
    clear();
  }

  const handleChange =(e) => {
    setCoinData({ ...coinData, [e.target.name]: e.target.value})
  }

  const clear = () => {
    setCoinData({
      ticker: '',
      quantity: '',
      entryPrice: '',
    })
  }

  return ( 
    <>
      <Paper>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">
            Add coin
          </Typography>

          <TextField name="ticker" variant="outlined" label="Coin ticker" fullWidth value={coinData.ticker} onChange={handleChange} />
          <TextField name="quantity" variant="outlined" label="Quantity" fullWidth value={coinData.quantity} onChange={handleChange} />
          <TextField name="entryPrice" variant="outlined" label="Entry price" fullWidth value={coinData.entryPrice} onChange={handleChange} />
          <Button variant="contained" color="primary" size="large" type="submit"> Add </Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear}> Clear </Button>
        </form>
      </Paper>
    </>
   );
}
 
export default AddTransactionForm;