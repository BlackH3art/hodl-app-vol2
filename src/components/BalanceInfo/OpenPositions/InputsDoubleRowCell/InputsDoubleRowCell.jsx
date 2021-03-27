import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';

import { DoubleRowCellContainer } from '../../../styledComponents/styledComponents';

import useStyles from './inputsDoubleRow.styles';
import './inputDoubleRow.css';

const InputsDoubleRowCell = ({ ticker }) => {

  const classes = useStyles();

  return ( 
    <DoubleRowCellContainer>
      <Grid container>
        <Grid item lg={10}>

          <form className={classes.form}>

            <div className={classes.labelInputContainer}>
              <label className={classes.labelClass}><Typography className={classes.secondaryTxt}>amount</Typography></label> <input type="text" placeholder={ticker} className={'input '} />
              <label className={classes.labelClass}><Typography className={classes.secondaryTxt}>price</Typography></label> <input type="text" placeholder={'$'} className={'input '} />
            </div>

            <div className={classes.sellButtonContainer}>
              <Button variant="outlined" color="secondary" size="small" > Sell </Button>
            </div>

          </form>
        </Grid>
      </Grid>
    </DoubleRowCellContainer>
   );
}
 
export default InputsDoubleRowCell;