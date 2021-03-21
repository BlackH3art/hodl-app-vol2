import React from 'react';

import useStyles from './app.styles';
import MainNav from './components/MainNav/MainNav';
import BalanceInfo from './components/BalanceInfo/BalanceInfo';
import AddCoinForm from './components/AddCoinForm/AddCoinForm';

const App = () => {

  const classes = useStyles();

  return ( 
    <>
      <div className={classes.wholeAppContainer}>
        <MainNav />
        
        <AddCoinForm />
        <BalanceInfo />

      </div>
    </>
   );
}
 
export default App;