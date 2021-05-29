import React from 'react';
import { AppBar, Avatar, Toolbar, Button, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';

import logo from '../../images/logo-rectangle.png';
import useStyles from './mainNav.styles';
import useButtonStyles from '../AddCoinForm/addCoinForm.styles';

import PersonIcon from '@material-ui/icons/Person';

const MainNav = () => {

  const classes = useStyles();
  const buttonClasses = useButtonStyles();

  const user = null;

  return ( 
    <>
    
      <AppBar position="relative" className={classes.myNav}>
        <div className={classes.navigation}>

          <div className={classes.logoBox}>
            <img className={classes.logo} src={logo} alt="hoDl!"/>
          </div>

          <Toolbar className={classes.loginBox}>
            {user ? (
              <div className={classes.loggedIn}>

                <Avatar className={classes.avatarIcon}>
                  <PersonIcon />
                </Avatar>

                <Typography>
                  isthismymail@o2.pl
                </Typography>
                
                <Button variant="outlined" className={`${buttonClasses.secondaryButton} ${classes.signOutButton}`} size="small"> Sign Out </Button>
              </div>
            ) : (
              <Button component={Link} to="/auth" variant="contained" className={`${buttonClasses.primaryButton} ${classes.signInButton}`} size="small" type="submit"> Sign In </Button>
            )}
          </Toolbar>

        </div>
      </AppBar>
      
    </>
   );
}
 
export default MainNav;