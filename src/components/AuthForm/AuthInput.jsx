import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const AuthInput = ({ name, handleChange, label, autoFocus, type, handleShowPassword, error }) => {
  return ( 
    <>
      <Grid item xs={12} sm={12}>
        <TextField 
          error={error ? true : false}
          name={name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          label={label}
          autoFocus={autoFocus}
          type={type}
          InputProps={name === "password" ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          } : {} }
        />
      </Grid>

    </>
   );
}
 
export default AuthInput;