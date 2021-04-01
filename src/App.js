import React, { useState } from 'react';

import useStyles from './app.styles';
import MainNav from './components/MainNav/MainNav';
import BalanceInfo from './components/BalanceInfo/BalanceInfo';
import AddCoinForm from './components/AddCoinForm/AddCoinForm';

const App = () => {

  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null)

  return ( 
    <>
      <div className={classes.wholeAppContainer}>
        <MainNav />
        
        <AddCoinForm currentId={currentId} setCurrentId={setCurrentId} />
        <BalanceInfo setCurrentId={setCurrentId} />

      </div>
    </>
   );
}
 
export default App;