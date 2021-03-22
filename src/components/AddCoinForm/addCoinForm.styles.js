import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  transactionForm: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "30px 0"
  }, 
  primaryButton: {
    backgroundImage: "linear-gradient(90deg, rgba(17,153,142,1) 0%, rgba(56,239,125,1) 100%)",
    textTransform: "lowercase",
    margin: "30px 10px",
    borderRadius: "20px",
    color: "white",
    fontSize: "1em"
  },
  secondaryButton: {
    textTransform: "lowercase",
    color: "rgba(17,153,142,1)",
    borderRadius: "20px",
    borderColor: "rgba(17,153,142,1)",
    margin: "30px 10px",
  }
}));

export default useStyles;
