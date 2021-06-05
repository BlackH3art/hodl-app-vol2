import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Toolbar, Button, Typography } from '@material-ui/core';

import { Link, useHistory, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../redux.actionTypes/actionTypes';

import logo from '../../images/logo-rectangle.png';
import useStyles from './mainNav.styles';
import useButtonStyles from '../AddCoinForm/addCoinForm.styles';

import PersonIcon from '@material-ui/icons/Person';

const MainNav = () => {

  const classes = useStyles();
  const buttonClasses = useButtonStyles();
  const dispatch = useDispatch(); 
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    const token = user?.token

    // jwt

    setUser(JSON.parse(localStorage.getItem('profile')));

  }, [location]);

  const logout = () => {
    dispatch({
      type: LOGOUT,
    });

    history.push('/');
    setUser(null);
  };


  return ( 
    <>
    
      <AppBar position="relative" className={classes.myNav}>
        <div className={classes.navigation}>

          <Link to="/">
            <div className={classes.logoBox}>
              <img className={classes.logo} src={logo} alt="hoDl!"/>
            </div>
          </Link>

          <Toolbar className={classes.loginBox}>
            {user ? (
              <div className={classes.loggedIn}>

                <Avatar className={classes.avatarIcon}>
                  <PersonIcon />
                </Avatar>

                <Typography>
                  {user.result.data.email}
                </Typography>
                
                <Button variant="outlined" className={`${buttonClasses.secondaryButton} ${classes.signOutButton}`} size="small" onClick={logout} > Sign Out </Button>
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