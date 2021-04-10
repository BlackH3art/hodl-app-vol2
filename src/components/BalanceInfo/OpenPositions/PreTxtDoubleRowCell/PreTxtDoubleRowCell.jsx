import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import { DoubleRowCellContainer } from '../../../styledComponents/styledComponents';


const PreTxtDoubleRowCell = ({ firstRow, secondRow, secondRowClassName, firstRowClassName, preClassName, firstPre, secondPre }) => {

  return ( 
    <>
      <DoubleRowCellContainer>
        <Grid container>
          <Grid item lg={3}>
            <Typography className={preClassName}>{firstPre}</Typography>
          </Grid>
          <Grid item lg={7}>
            <Typography align="right" className={firstRowClassName}>{firstRow}</Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography className={preClassName}>{secondPre}</Typography>
          </Grid>
          <Grid item lg={7}>
            <Typography align="right" className={secondRowClassName}>{secondRow}</Typography>
          </Grid>
        </Grid>
        
        
      </DoubleRowCellContainer>
    </>
  );
}
 
export default PreTxtDoubleRowCell;