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
    padding: "0 15px"
  },
  componentsNavigations: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1
  }, 
  historyButton: {
    marginRight: "30px"
  }
}));

export default useStyles;