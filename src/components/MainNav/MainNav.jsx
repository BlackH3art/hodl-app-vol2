import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import logo from '../../images/logo-rectangle.png'
import useStyles from './mainNav.styles';

const MainNav = () => {

  const classes = useStyles();

  return ( 
    <>
    
      <AppBar position="relative" className={classes.myNav}>
        <Toolbar>
          <img className={classes.logo} src={logo} alt="hoDl!"/>
        </Toolbar>
      </AppBar>
      
    </>
   );
}
 
export default MainNav;