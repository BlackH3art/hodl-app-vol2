import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  logo: {
    marginLeft: "20px",
    height: "80px",
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
  }, 
  avatarIcon: {
    marginRight: "15px",
    backgroundImage: "linear-gradient(90deg, rgba(17,153,142,1) 0%, rgba(56,239,125,1) 100%)",
  }

}))

export default useStyles;