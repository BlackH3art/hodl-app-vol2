import React from 'react';
import { Typography } from '@material-ui/core';

import { DoubleRowCellContainer } from '../../styledComponents/styledComponents';


const DoubleRowCell = ({ firstRow, secondRow, secondRowClassName, firstRowClassName }) => {


  return ( 
    <>
      <DoubleRowCellContainer>
        <Typography className={firstRowClassName}>{firstRow}</Typography>
        <Typography className={secondRowClassName}>{secondRow}</Typography>
      </DoubleRowCellContainer>
    </>
   );
}
 
export default DoubleRowCell;