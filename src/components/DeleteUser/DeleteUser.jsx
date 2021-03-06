import React, { useState } from 'react';
import { Container, Paper, Typography, Button, FormControl, FormLabel, FormHelperText, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { DeleteButtonWrapper } from '../styledComponents/styledComponents';

import { deleteUser } from '../../api/index';

import useStyles from './deleteUSer.styles';
import { useHistory } from 'react-router-dom';

const DeleteUser = () => {

  const classes = useStyles();
  const history = useHistory();
  const [deleteFormData, setDeleteFormData] = useState({ reason: "" });
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({ error: false, message: ""});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!reason) return setError({ error: true, message: "Please, choose one of these reasons."})
    
    setDeleteFormData({
      reason: reason
    });

    const response = await deleteUser(deleteFormData);

    switch (response.status) {
      case 200:
        localStorage.clear();

        setMessage(response.data.message);

        setTimeout(() => {
          history.push('/');
        }, 3000);
        break;
      
      case 404:
        setMessage(response.data.message);

        setTimeout(() => {
          history.push('/application/open-positions');
        }, 3000);
        break;

      case 500:
        setMessage(response.data.message);

        setTimeout(() => {
          history.push('/application/open-positions');
        }, 3000);
        break;
    
      default:
        setMessage('Unknown error!');

        setTimeout(() => {
          history.push('/application/open-positions');
        }, 3000);
        break;
    }
  };

  const handleChangeMind = () => {
    history.goBack();
  }

  const handleChange = (e) => {
    setReason(e.target.value);
  }

  return ( 
    <>
      <div className={classes.deletePageWrapper}>
        <Container component="main" maxWidth="sm">

          <Paper className={classes.paper} elevation={3}>
            {deleteFormData.reason ? (
              <>
                <Typography variant="h6">
                  {message}
                </Typography>  
              </>
            ) : (
              <>
                <Typography variant="h6">
                  Are you sure you want to delete your account?
                </Typography>

                <Typography className={classes.noteText}>
                  Mind that if you confirm you want to delete your account, we won't be able to restore your account.
                </Typography>

                <form className={classes.deleteReasonForm} onSubmit={handleSubmit}>

                  
                  <FormControl className={classes.formControl} component="fieldset" error={error}>

                    <FormLabel className={classes.formLabel} component="legend">Why you want to delete your account? </FormLabel>

                    <FormHelperText> {error.message} </FormHelperText>

                    <RadioGroup aria-label="reason" defaultValue="Testing" name="reason" value={reason} onChange={handleChange}>
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        value="Recruiter"
                        label="I'm recruiter"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        value="Testing"
                        label="I was just testing"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        value="Not liked it"
                        label="I don't like it"
                      />
                    </RadioGroup>

                  </FormControl>
                  

                  <DeleteButtonWrapper>
                    <Button className={classes.btn} variant="outlined" color="secondary" type="submit"> Delete </Button>
                    <Button className={classes.btn} variant="contained" color="primary" onClick={handleChangeMind}> I changed my mind </Button>
                  </DeleteButtonWrapper>

                </form>

              </>
            )}

          </Paper>
        </Container>
      </div>
    </>
   );
}
 
export default DeleteUser;