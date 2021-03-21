import React from 'react';
import { Container, Typography } from '@material-ui/core';

import useStyles from './coinList.styles';
import { useSelector } from 'react-redux';

const CoinList = () => {

  const classes = useStyles();
  const coins = useSelector((state) => state.coinReducer);


  return ( 
    <>
      <Container component="div" className={classes.coinListContainer}>
        <Typography variant="h4">
          Coin list
        </Typography>
      </Container>
    </>
   );
}
 
export default CoinList;