import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  infoContainer: {
    backgroundColor: "white",
    // minHeight: "500px",
    borderRadius: "25px",
    marginTop: "50px",
    boxShadow: "2px 4px 10px -1px #5B5456",
    // border: "solid 5px #fc3c24"
  },
  title: {
    color: "rgba(17,153,142,1)",
    fontWeight: 400,
    padding: "30px 0 15px",
    fontSize: "1.8em",
  }
}));

export default useStyles;