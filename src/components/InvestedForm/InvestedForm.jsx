import React, { useState, useContext } from 'react';
import { TextField, Button, Grid, Typography, Container, FormControl } from '@material-ui/core';
import { ButtonWrapper } from '../styledComponents/styledComponents';

import useStyles from './investedForm.styles';

import { AppContext } from '../../Context/AppContext';

import { investedUpdate } from '../../api/index';


const InvestedForm = () => {

  const classes = useStyles();
  const [investedData, setInvestedData] = useState({ invested: '' });
  const [appState, setAppState] = useContext(AppContext);


  const handleChange = (e) => {
    setInvestedData({ invested: e.target.value});
  };

  const handleSubmit = async (e) => {
    
    try {
      
      e.preventDefault();
  
      const response = await investedUpdate(investedData);

      if(response.status === 200) {

        let currentUser = localStorage.getItem('profile');

        localStorage.setItem('profile', JSON.stringify({
          ...currentUser,
          result: response.data.updatedUser
        }));

        setAppState({
          ...appState,
          openInvestedForm: false
        });
      };

    } catch (error) {
      console.log(error);
    };
  };

  const clear = () => {
    setInvestedData({ invested: ''});
  };

  return ( 
    <>
      <Container component="div">
        <FormControl fullWidth className={classes.investedForm} autoComplete="off" noValidate>
          
          <Typography className={classes.title} variant="h6">
            How much you invested?
          </Typography>

          <Grid container justify="space-around">

            <Grid item lg={3} sm={10}>
              <TextField name="invested" variant="standard" label="e.g. 10000$" type="number" fullWidth value={investedData.invested} onChange={handleChange} />
                <Typography className={classes.errorMessage}>
                  
                </Typography>
            </Grid>

          </Grid>

          <ButtonWrapper>
            <Button variant="contained" className={classes.primaryButton} size="large" type="submit" onClick={handleSubmit}> Submit </Button>
            <Button variant="outlined" className={classes.secondaryButton} size="large" onClick={clear}> Clear </Button>
          </ButtonWrapper>

        </FormControl>
      </Container>
    </>
  );
}
 
export default InvestedForm;