import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './doubleRowCell.styles';

const DoubleRowCell = ({ firstRow, secondRow, secondRowClassName }) => {

  const classes = useStyles();

  return ( 
    <>
      <div className={classes.cellContainer}>
        <Typography>{firstRow}</Typography>
        <Typography className={secondRowClassName}>{secondRow}</Typography>
      </div>
    </>
   );
}
 
export default DoubleRowCell;