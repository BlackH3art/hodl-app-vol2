import React from 'react';

import FileCopyIcon from '@material-ui/icons/FileCopy';
import useStyles from './footer.styles';

import { Input, InputAdornment, IconButton } from '@material-ui/core';
import BottomContainer from './BottomContainer/BottomContainer';

const Footer = () => {

  const classes = useStyles();

  const handleCopyBTC = () => {

    let myInput = document.getElementById('myinput')

    myInput.select()
    myInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
  }

  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.iconsContainer}>
          <div className={classes.infoContainer}>
            <p className={classes.message}>If you want to support this project, you can send some love with Bitcoin :) : </p>
            <div className={classes.headerInputContainer}>
              <label className={classes.bitcoinLabel}> <img className={classes.coinLogo} src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="BTC"/> </label> 

              <Input
                id='myinput'
                type='text'
                className={classes.myInput}
                value={"1GBHQd4MA24dbxXMJB94YMYtKdEYjaobRY"}
                onChange={() => null}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleCopyBTC}>
                      {<FileCopyIcon style={{color: "#f8f9fa"}} />}
                    </IconButton>
                  </InputAdornment>}
              />

            </div>
          </div>
        </div>

        <BottomContainer />

      </footer>
    </>
  )
}
 
export default Footer;