import React, { useState, useContext } from 'react';

import BalanceInfo from '../BalanceInfo/BalanceInfo';
import AddCoinForm from '../AddCoinForm/AddCoinForm';
import InvestedForm from '../InvestedForm/InvestedForm';

import useStyles from './app.styles';
import useWindowSize from '../../helpers/useWindowSize';

import { AppContext } from '../../Context/AppContext';
import BalanceInfoMobile from '../BalanceInfoMobile/BalanceInfoMobile';


const Application = () => {

  const [currentId, setCurrentId] = useState(null);
  const { appState } = useContext(AppContext);
  const classes = useStyles();
  const [width] = useWindowSize();
  console.log(width);


  return ( 
    <>
      <div className={classes.wholeAppContainer}>
        
        {appState.openInvestedForm ? <InvestedForm /> : <AddCoinForm currentId={currentId} setCurrentId={setCurrentId} />}
        
        
        {width > 500 ? 
          <BalanceInfo setCurrentId={setCurrentId} /> : <BalanceInfoMobile setCurrentId={setCurrentId} />
        }
        

      </div>
    </>
  );
}
 
export default Application;