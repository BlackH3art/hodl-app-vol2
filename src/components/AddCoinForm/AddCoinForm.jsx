import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Grid, Typography, Container, FormControl } from '@material-ui/core';
import { ButtonWrapper } from '../styledComponents/styledComponents';

import { addTransaction, editTransaction, fetchPricesCoinData } from '../../redux.actions/coinActions';
import { NO_SUCH_COIN_IN_CMC, CLEAR_ERRORS } from '../../redux.actionTypes/actionTypes';
import useStyles from './addCoinForm.styles';

import { isThereSuchCoin } from '../../api/index';

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
  const errors = useSelector((state) => state.errorReducer);

  useEffect(() => {
    // jeżeli transaction będzie miała wartość === transakcja ma być edytowana nie dodawana
    if(transaction) return setCoinData(transaction);
  }, [transaction])

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({
      type: CLEAR_ERRORS,
    });

    if(currentId) {
      dispatch(editTransaction(currentId, coinData))
    } else {

      try {

        const response = await isThereSuchCoin(coinData.ticker);
        console.log(response)
        
        switch (response.status) {
          case 200:
            dispatch(addTransaction({
              ...coinData,
              openDate: new Date(),
            }));
    
            clear();
            break;

          case 400: 
            dispatch({
              type: NO_SUCH_COIN_IN_CMC,
              payload: "There's no such coin."
            });
            break;
        
          default:
            break;
        }

      } catch (error) {

        dispatch({
          type: NO_SUCH_COIN_IN_CMC,
          payload: "There's no such coin."
        });
      }
    }
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
              <TextField name="ticker" error={errors.length >= 1} variant="standard" label="Coin ticker" fullWidth value={coinData.ticker} onChange={handleChange} />
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