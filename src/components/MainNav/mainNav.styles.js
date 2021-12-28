import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  logo: {
    marginLeft: "20px",
    height: "80px",
    "@media (max-width: 500px)": {
      height: "50px"
    }
  },
  myNav: {
    backgroundColor: "#393939",
    display: "flex"
  },
  logoBox: {
    flexGrow: 0
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between"
  },
  signOutIcon:{
    padding: "5px 5px",
    minWidth: "20px"
  },
  loggedIn: {
    display: "flex",
    alignItems: "center"
  },
  signOutButton: {
    fontSize: "0.8em",
    fontWeight: 400,
    paddingRight: "20px",
    paddingLeft: "20px",
  }, 
  signInButton: {
    fontSize: "0.9em",
    fontWeight: 600,
    paddingRight: "20px",
    paddingLeft: "20px",
    "@media (max-width: 500px)": {
      margin: "5px 5px",
      minWidth: "20px"
    }
  }, 
  avatarIcon: {
    marginRight: "15px",
    backgroundImage: "linear-gradient(90deg, rgba(17,153,142,1) 0%, rgba(56,239,125,1) 100%)",
    "@media (max-width: 500px)": {
      margin: "0 5px"
    }
  },
  settingsButton: {
    color: "white",
    "@media (max-width: 500px)": {
      padding: "5px 5px",
      minWidth: "20px"
    }
  }

}))

export default useStyles;