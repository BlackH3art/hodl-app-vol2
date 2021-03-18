import React from 'react';
import { Container, Typography } from '@material-ui/core';

import useStyles from './balanceInfo.styles';


const BalanceInfo = () => {

  const classes = useStyles();

  return ( 
    <>
      <Container component="div" className={classes.infoContainer}>
        <Typography variant="h4">
          
        </Typography>
      </Container>
    </>
   );
}
 
export default BalanceInfo;