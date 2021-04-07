import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  infoContainer: {
    backgroundColor: "white",
    borderRadius: "25px",
    marginTop: "50px",
    boxShadow: "2px 4px 10px -1px #5B5456",
    // border: "solid 5px #fc3c24"
  },
  title: {
    display: "flex",
    color: "rgba(17,153,142,1)",
    fontWeight: 400,
    padding: "30px 0 15px",
    fontSize: "1.8em",
  },
  routeButton: {
    marginLeft: "30px",
    padding: "0 15px"
  },
  historyButton: {
    alignSelf: "flex-end"
  }
}));

export default useStyles;