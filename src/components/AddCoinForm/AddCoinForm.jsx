import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Grid, Typography, Container, MenuItem, FormControl } from '@material-ui/core';
import { ButtonWrapper } from '../styledComponents/styledComponents';

import { addTransaction } from '../../redux.actions/coinActions';
import useStyles from './addCoinForm.styles';

const AddTransactionForm = () => {

  const classes = useStyles(); 
  const [coinData, setCoinData] = useState({
    ticker: '',
    type: '',
    quantity: '',
    price: '',
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
      type: '',
      quantity: '',
      price: '',
    });
  }

  return ( 
    <>
      <Container component="div">
        <FormControl fullWidth className={classes.transactionForm} autoComplete="off" noValidate onSubmit={handleSubmit}>
          
          <Typography variant="h6">
            Add transaction
          </Typography>

          <Grid container justify="space-around">

            <Grid item lg={2} sm={10}>
              <TextField name="ticker" variant="standard" label="Coin ticker" fullWidth value={coinData.ticker} onChange={handleChange} />
            </Grid>

            <Grid item lg={2} sm={10}>
              <TextField SelectProps={{ autoWidth: true }} select name="type" variant="standard" label="buy / sell" fullWidth value={coinData.type}   onChange={handleChange}>
                <MenuItem value="buy">buy</MenuItem>
                <MenuItem value="sell">sell</MenuItem>
              </TextField>
            </Grid>

            <Grid item lg={2} sm={10}>
              <TextField name="quantity" variant="standard" label="Quantity" fullWidth value={coinData.quantity} onChange={handleChange} />
            </Grid>

            <Grid item lg={2} sm={10}>
              <TextField name="price" variant="standard" label="Price" fullWidth value={coinData.price} onChange={handleChange} />
            </Grid>

          </Grid>

          <ButtonWrapper>
            <Button variant="contained" className={classes.primaryButton} size="large" type="submit"> Add </Button>
            <Button variant="outlined" className={classes.secondaryButton} size="large" onClick={clear}> Clear </Button>
          </ButtonWrapper>

        </FormControl>
      </Container>
    </>
   );
}
 
export default AddTransactionForm;