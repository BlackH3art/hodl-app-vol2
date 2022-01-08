import React from 'react';

import useStyles from '../openPositions.styles';

const TickerLogoMobile = ({ logo, ticker, name }) => {

  const classes = useStyles();

  return ( 
    <div className={classes.tickerLogoContainer}>
      <img className={classes.logo} src={logo} alt={ticker} height="20px" /> 
      <div className={classes.tickerBox}>
        <p className={classes.mainText}>{name}</p>
        <p className={classes.secondaryTxt}>{ticker}</p>
      </div>
    </div>
   );
}
 
export default TickerLogoMobile;