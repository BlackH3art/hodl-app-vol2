import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';

import AuthInput from './AuthInput';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './authFrom.styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signIn, signUp } from '../../redux.actions/authActions';

const initial = {
  email: "",
  password: "",
  confirmPassword: ""
}


const AuthForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [loginData, setLoginData] = useState(initial);
  const classes = useStyles(); 
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);

    if(isSignedUp) {
      dispatch(signUp(loginData, history));
    } else {
      dispatch(signIn(loginData, history));
    }
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleShowPassword = () => {
    // setShowPassword(!showPassword)
    setShowPassword((prevState) => !prevState);
  };

  const switchSignUp = () => {
    setIsSignedUp((prevState) => !prevState);
    setShowPassword(false);
  };

  return ( 
    <>
      <div className={classes.authContainer}>
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper} elevation={3}>

            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography variant="h5"> {isSignedUp ? "Sign up" : "Sign in"} </Typography>

            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <AuthInput name="email" label="e-mail" type="email" handleChange={handleChange} autoFocus />
                <AuthInput name="password" label="password" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} handleChange={handleChange} />
                {isSignedUp && (
                  <>
                    <AuthInput name="confirmPassword" label="confirm password" type="password" handleChange={handleChange} />
                  </>
                )}
              </Grid> 

              <Button type="submit" fullWidth className={classes.submit} variant="contained">
                {isSignedUp ? "Sign Up" : "Sign In"}
              </Button>

              <Grid container justify="flex-end">
                <Grid item>
                  <Button onClick={switchSignUp}>
                    {isSignedUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
                  </Button>
                </Grid>
              </Grid>

            </form>

          </Paper>
        </Container>
      </div>
    </>
   );
}
 
export default AuthForm;