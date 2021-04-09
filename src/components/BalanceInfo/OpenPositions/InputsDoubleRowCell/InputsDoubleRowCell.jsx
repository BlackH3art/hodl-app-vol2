import React, { useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';

import { DoubleRowCellContainer } from '../../../styledComponents/styledComponents';

import { sellTransaction } from '../../../../redux.actions/coinActions';

import { useDispatch } from 'react-redux';
import useStyles from './inputsDoubleRow.styles';

import './inputDoubleRow.css';

const InputsDoubleRowCell = ({ ticker, id }) => {

  const classes = useStyles();
  const [sellingData, setSellingData] = useState({
    ticker: ticker,
    type: 'sell',
    sellingQuantity: '',
    sellingPrice: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSellingData({
      ...sellingData,
      [e.target.name]: e.target.value
    })    
  }

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('submit sell transaction');

    
    dispatch(sellTransaction(id, { ...sellingData, closeDate: new Date() }));

    clear();
  }

  const clear = () => {
    setSellingData({
      sellingQuantity: '',
      sellingPrice: '',
      type: 'sell',
    })
  }

  return ( 
    <DoubleRowCellContainer>
      <Grid container>
        <Grid item lg={10}>

          <form className={classes.form}>

            <div className={classes.labelInputContainer}>
              <label className={classes.labelClass}><Typography className={classes.secondaryTxt}>amount</Typography></label> <input type="number" value={sellingData.sellingQuantity} name="sellingQuantity" onChange={handleChange} placeholder={ticker} className={'input '} />
              <label className={classes.labelClass}><Typography className={classes.secondaryTxt}>price</Typography></label> <input type="number" value={sellingData.sellingPrice} name="sellingPrice" onChange={handleChange} placeholder={'$'} className={'input '} />
            </div>

            <div className={classes.sellButtonContainer}>
              <Button variant="outlined" color="secondary" size="small" onClick={handleSubmit}> 
                Sell 
              </Button>
            </div>

          </form>
        </Grid>
      </Grid>
    </DoubleRowCellContainer>
   );
}
 
export default InputsDoubleRowCell;