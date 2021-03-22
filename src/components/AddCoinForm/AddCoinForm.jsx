import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Grid, Typography, Container } from '@material-ui/core';
import { ButtonWrapper } from '../styledComponents/styledComponents';

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
    });
  }

  return ( 
    <>
      <Container component="div">
        <form className={classes.transactionForm} autoComplete="off" noValidate onSubmit={handleSubmit}>
          
          <Typography variant="h6">
            Add transaction
          </Typography>

          <Grid container justify="space-around">

            <Grid item lg={3} sm={10}>
              <TextField name="ticker" variant="standard" label="Coin ticker" fullWidth value={coinData.ticker} onChange={handleChange} />
            </Grid>

            <Grid item lg={3} sm={10}>
              <TextField name="quantity" variant="standard" label="Quantity" fullWidth value={coinData.quantity} onChange={handleChange} />
            </Grid>

            <Grid item lg={3} sm={10}>
              <TextField name="entryPrice" variant="standard" label="Entry price" fullWidth value={coinData.entryPrice} onChange={handleChange} />
            </Grid>

          </Grid>

          <ButtonWrapper>
            <Button variant="contained" className={classes.primaryButton} size="large" type="submit"> Add </Button>
            <Button variant="outlined" className={classes.secondaryButton} size="large" onClick={clear}> Clear </Button>
          </ButtonWrapper>

        </form>
      </Container>
    </>
   );
}
 
export default AddTransactionForm;