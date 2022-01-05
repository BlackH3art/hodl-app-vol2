import React, { useContext } from 'react';
import { Button, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './settingsMenu.styles';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import { AppContext } from '../../../Context/AppContext';


const SettingsMenu = () => {

  const classes = useStyles();
  const {appState, setAppState} = useContext(AppContext);

  const handleOpenInvestedForm = () => {
    setAppState({
      openSettings: !appState.openSettings,
      openInvestedForm: !appState.openInvestedForm
    });
  };

  const handleDelete = () => {
    setAppState({
      ...appState,
      openSettings: false,
    });
  };

  return ( 
    <>
      <Container component="div" className={classes.settingsContainer}>

        <Typography className={classes.settingTitle} variant="h5"> Settings </Typography>

        <List component="ul" className={classes.list}>

          <ListItem>
            <Button className={classes.listItem} onClick={handleOpenInvestedForm}>
              <ListItemIcon>
                <AccountBalanceWalletIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Invested" />              
            </Button>
          </ListItem>

          <Divider/>

          <ListItem>
            <Button component={Link} to="/user/delete-acount" className={`${classes.listItem} ${classes.dangerAction}`} onClick={handleDelete}>
              <ListItemIcon>
                <DeleteOutlineOutlinedIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Delete account" />              
            </Button>

          </ListItem>

        </List>

      </Container>
    </>
  );
}
 
export default SettingsMenu;