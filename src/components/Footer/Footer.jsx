import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import useStyles from './footer.styles';

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
          <a className={classes.link} href="https://github.com/BlackH3art/hodl-app-vol2" rel="noreferrer" target="_blank" > <GitHubIcon color="white" /> </a>
          <div className={classes.infoContainer}>
            <p>If you want support this project: </p>
            <div className={classes.headerInputContainer}>
              <label className={classes.bitcoinLabel}> <img className={classes.coinLogo} src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="BTC"/> </label> 
              <input className={classes.myInput} id="myinput" type="text" value={"asdfasdfasdfasdf"}/> 
              <button onClick={handleCopyBTC} className="btn btn-outline-light"> <FileCopyIcon /> </button>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}
 
export default Footer;