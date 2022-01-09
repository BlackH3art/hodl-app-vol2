import React from 'react';

import useStyles from '../openPositions.styles';

const DoubleRowCellMobile = ({ preText, pre1, pre2, text1, text2, text1class, text2class, name }) => {

  const classes = useStyles();

  return ( 
    <div className={classes.doubleRowMobileWrapper}>
      {preText && (
        <div className={classes.textContainer}>
          <p className={classes.secondaryTxt}>{pre1}</p>
          <p className={classes.secondaryTxt}>{pre2}</p>
        </div>
      )}
      <div className={classes.textPrimeContainer}>
        <p className={`${classes.mainText} ${text1class}`}>{text1}</p>
        <p className={`${classes.mainText} ${text2class}`}>{text2}</p>
      </div>
    </div>
  );
}
 
export default DoubleRowCellMobile;