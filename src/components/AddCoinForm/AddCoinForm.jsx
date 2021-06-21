import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Grid, Typography, Container, FormControl } from '@material-ui/core';
import { ButtonWrapper } from '../styledComponents/styledComponents';

import { addTransaction, editTransaction } from '../../redux.actions/coinActions';
import { NO_SUCH_COIN_IN_CMC, CLEAR_ERRORS, FIELDS_ARE_REQUIRED } from '../../redux.actionTypes/actionTypes';
import useStyles from './addCoinForm.styles';

import { isThereSuchCoin } from '../../api/index';

const AddTransactionForm = ({ currentId, setCurrentId }) => {

  const classes = useStyles(); 
  const dispatch = useDispatch();
  const [coinData, setCoinData] = useState({
    ticker: '',
    type: 'buy',
    quantity: '',
    entryPrice: '',
  }); 
  const [errorsObject, setErrorsObject] = useState({
    coin: "",
    quantity: "",
    price: ""
  });

  const transaction = useSelector((state) => currentId ? state.coinReducer.find((transaction) => transaction._id === currentId ) : null );

  useEffect(() => {
    if(transaction) return setCoinData(transaction);
  }, [transaction]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({
      type: CLEAR_ERRORS,
    });

    setErrorsObject({
      coin: "",
      quantity: "",
      price: ""
    });

    if (!coinData.ticker && !coinData.quantity && !coinData.entryPrice) {

      setErrorsObject({
        coin: "Coin ticker is required",
        quantity: "Quantity is required",
        price: "Entry price is required"
      }); 

      return dispatch({
        type: FIELDS_ARE_REQUIRED,
        payload: errorsObject
      });

    } else if (coinData.ticker && !coinData.quantity && !coinData.entryPrice) {
      setErrorsObject({
        coin: "",
        quantity: "Quantity is required",
        price: "Entry price is required"
      }); 

      return dispatch({
        type: FIELDS_ARE_REQUIRED,
        payload: errorsObject
      });

    } else if (!coinData.ticker && coinData.quantity && !coinData.entryPrice) {
      setErrorsObject({
        coin: "Coin ticker is required",
        quantity: "",
        price: "Entry price is required"
      }); 

      return dispatch({
        type: FIELDS_ARE_REQUIRED,
        payload: errorsObject
      });

    } else if (!coinData.ticker && !coinData.quantity && coinData.entryPrice) {
      
      setErrorsObject({
        coin: "Coin ticker is required",
        quantity: "Quantity is required",
        price: ""
      }); 

      return dispatch({
        type: FIELDS_ARE_REQUIRED,
        payload: errorsObject
      });

    } else if (coinData.ticker && coinData.quantity && !coinData.entryPrice) {

      setErrorsObject({
        coin: "",
        quantity: "",
        price: "Entry price is required"
      }); 

      return dispatch({
        type: FIELDS_ARE_REQUIRED,
        payload: errorsObject
      });

    } else if (coinData.ticker && !coinData.quantity && coinData.entryPrice) {

      setErrorsObject({
        coin: "",
        quantity: "Quantity is required",
        price: ""
      }); 

      return dispatch({
        type: FIELDS_ARE_REQUIRED,
        payload: errorsObject
      });

    } else if (!coinData.ticker && coinData.quantity && coinData.entryPrice) {

      setErrorsObject({
        coin: "Coin ticker is required",
        quantity: "",
        price: ""
      }); 

      return dispatch({
        type: FIELDS_ARE_REQUIRED,
        payload: errorsObject
      });
    }


    if(currentId) {
      dispatch(editTransaction(currentId, coinData))
    } else {

      try {

        const response = await isThereSuchCoin(coinData.ticker);
        
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

        console.log(error.message);

        setErrorsObject({
          coin: "There's no such coin",
          quantity: "",
          price: ""
        });

        dispatch({
          type: NO_SUCH_COIN_IN_CMC,
          payload: errorsObject
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

    setErrorsObject({
      coin: "",
      quantity: "",
      price: ""
    });
    
    setCurrentId(null);
  }

  return ( 
    <>
      <Container component="div">
        <FormControl fullWidth className={classes.transactionForm} autoComplete="off" noValidate>
          
          <Typography className={classes.title} variant="h6">
            {currentId ? 'Edit' : 'Buy'} transaction
          </Typography>

          <Grid container justify="space-around">

            <Grid item lg={3} sm={10}>
              <TextField name="ticker" error={errorsObject.coin ? true : false} variant="standard" label="Coin ticker" fullWidth value={coinData.ticker} onChange={handleChange} />
              {errorsObject.coin && 
                <Typography className={classes.errorMessage}>
                  {errorsObject.coin}
                </Typography>
              }
            </Grid>

            <Grid item lg={3} sm={10}>
              <TextField name="quantity" error={errorsObject.quantity ? true : false} type="number" variant="standard" label="Quantity" fullWidth value={coinData.quantity} onChange={handleChange} />
              {errorsObject.quantity && 
                <Typography className={classes.errorMessage}>
                  {errorsObject.quantity}
                </Typography>
              }
            </Grid>

            <Grid item lg={3} sm={10}>
              <TextField name="entryPrice" error={errorsObject.price ? true : false} type="number" variant="standard" label="Price" fullWidth value={coinData.entryPrice} onChange={handleChange} />
              {errorsObject.price && 
                <Typography className={classes.errorMessage}>
                  {errorsObject.price}
                </Typography>
              }
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