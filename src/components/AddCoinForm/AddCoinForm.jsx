import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Grid, Typography, Container, FormControl } from '@material-ui/core';
import { ButtonWrapper } from '../styledComponents/styledComponents';

import { addTransaction, editTransaction, fetchPricesCoinData } from '../../redux.actions/coinActions';
import useStyles from './addCoinForm.styles';

const AddTransactionForm = ({ currentId, setCurrentId }) => {

  const classes = useStyles(); 
  const [coinData, setCoinData] = useState({
    ticker: '',
    type: 'buy',
    quantity: '',
    entryPrice: '',
  }); 
  const dispatch = useDispatch();

  // transakcja do edytowania
  const transaction = useSelector((state) => currentId ? state.coinReducer.find((transaction) => transaction._id === currentId ) : null );


  useEffect(() => {
    // jeżeli transaction będzie miała wartość === transakcja ma być edytowana nie dodawana
    if(transaction) return setCoinData(transaction);
  }, [transaction])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(editTransaction(currentId, coinData))
    } else {
      dispatch(addTransaction({
        ...coinData,
        openDate: new Date(),
      }));
      
      dispatch(fetchPricesCoinData(coinData.ticker.toUpperCase()));
    }

    clear();
  }

  const handleChange =(e) => {
    setCoinData({ ...coinData, [e.target.name]: e.target.value})
  }

  const clear = () => {
    setCoinData({
      ticker: '',
      type: 'buy',
      quantity: '',
      entryPrice: '',
    });
    setCurrentId(null);
  }

  return ( 
    <>
      <Container component="div">
        <FormControl fullWidth className={classes.transactionForm} autoComplete="off" noValidate>
          
          <Typography variant="h6">
            {currentId ? 'Edit' : 'Buy'} transaction
          </Typography>

          <Grid container justify="space-around">

            <Grid item lg={3} sm={10}>
              <TextField name="ticker" variant="standard" label="Coin ticker" fullWidth value={coinData.ticker} onChange={handleChange} />
            </Grid>

            <Grid item lg={3} sm={10}>
              <TextField name="quantity" variant="standard" label="Quantity" fullWidth value={coinData.quantity} onChange={handleChange} />
            </Grid>

            <Grid item lg={3} sm={10}>
              <TextField name="entryPrice" variant="standard" label="Price" fullWidth value={coinData.entryPrice} onChange={handleChange} />
            </Grid>

          </Grid>

          <ButtonWrapper>
            <Button variant="contained" className={classes.primaryButton} size="large" type="submit" onClick={handleSubmit}> {currentId ? 'Edit' : 'Buy'}  </Button>
            <Button variant="outlined" className={classes.secondaryButton} size="large" onClick={clear}> Clear </Button>
          </ButtonWrapper>

        </FormControl>
      </Container>
    </>
   );
}
 
export default AddTransactionForm;