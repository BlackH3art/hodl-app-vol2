import React, { useState, useContext } from 'react';

import BalanceInfo from '../BalanceInfo/BalanceInfo';
import AddCoinForm from '../AddCoinForm/AddCoinForm';
import InvestedForm from '../InvestedForm/InvestedForm';

import useStyles from './app.styles';

import { AppContext } from '../../Context/AppContext';


const Application = () => {

  const [currentId, setCurrentId] = useState(null);
  const [appState] = useContext(AppContext);
  const classes = useStyles();


  return ( 
    <>
      <div className={classes.wholeAppContainer}>
        
        {appState.openInvestedForm ? <InvestedForm /> : <AddCoinForm currentId={currentId} setCurrentId={setCurrentId} />}
        <BalanceInfo setCurrentId={setCurrentId} />

      </div>
    </>
  );
}
 
export default Application;