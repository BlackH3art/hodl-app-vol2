import React, { useState } from 'react';

import BalanceInfo from '../BalanceInfo/BalanceInfo';
import AddCoinForm from '../AddCoinForm/AddCoinForm';

import useStyles from './app.styles';


const Application = () => {

  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();


  return ( 
    <>
      <div className={classes.wholeAppContainer}>
        
        <AddCoinForm currentId={currentId} setCurrentId={setCurrentId} />
        <BalanceInfo setCurrentId={setCurrentId} />

      </div>
    </>
  );
}
 
export default Application;