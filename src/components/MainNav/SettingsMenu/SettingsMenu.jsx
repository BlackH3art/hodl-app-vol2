import React from 'react';
import { Button, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';

import useStyles from './settingsMenu.styles';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';


const SettingsMenu = () => {

  const classes = useStyles();

  return ( 
    <>
      <Container component="div" className={classes.settingsContainer}>

        <Typography className={classes.settingTitle} variant="h5"> Settings </Typography>

        <List component="ul" className={classes.list}>

          <ListItem>
            <Button className={classes.listItem}>
              <ListItemIcon>
                <AccountBalanceWalletIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Invested" />              
            </Button>
          </ListItem>

          <Divider/>

          <ListItem>
            <Button className={`${classes.listItem} ${classes.dangerAction}`}>
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