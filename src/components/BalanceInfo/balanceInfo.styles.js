import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  infoContainer: {
    backgroundColor: "white",
    borderRadius: "25px",
    marginTop: "50px",
    boxShadow: "2px 4px 10px -1px #5B5456",
    "@media (max-width: 500px)": {
      borderRadius: "15px",
      marginTop: "15px",
    }
  },
  title: {
    display: "flex",
    color: "rgba(17,153,142,1)",
    fontWeight: 400,
    padding: "30px 0 15px",
    fontSize: "1.8rem",
    "@media (max-width: 500px)": {
      fontSize: "1.2rem"
    }
  },
  routeButton: {
    marginLeft: "30px",
    padding: "0 15px",
    "@media (max-width: 500px)": {
      margin: "0 0",
      padding: "0 0",
      minWidth: "32px"
    }

  },
  titleButtonsContainer: {
    display: "flex",
    "@media (max-width: 500px)": {
      justifyContent: "space-between",
    }
  },
  componentsNavigations: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
    backgroundColor: "none",
    "@media (max-width: 500px)": {
      flexGrow: 0,
      justifyContent: "flex-end",
    }
  }, 
  componentLink: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "15px"

  },
  historyButton: {
    marginRight: "30px",
    "@media (max-width: 500px)": {
      marginRight: "0"
    }
  },
  separator: {
    height: "1px",
    width: "100%", 
    backgroundColor: "white",
    backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(77,126,117,1) 11%, rgba(77,126,117,1) 89%, rgba(255,255,255,1) 100%)"
  }
}));

export default useStyles;