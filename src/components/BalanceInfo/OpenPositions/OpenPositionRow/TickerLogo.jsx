import React from 'react';

import useStyles from '../openPositions.styles';

const TickerLogo = ({ logo, ticker, name }) => {

  const classes = useStyles();

  return ( 
    <div className={classes.tickerLogoContainer}>
      <img className={classes.logo} src={logo} alt={ticker} height="20px" /> 
      <div className={classes.tickerBox}>
        <p>{name} {ticker}</p>
      </div>
    </div>
   );
}
 
export default TickerLogo;