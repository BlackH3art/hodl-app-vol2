import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  transactionForm: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "30px 0",
    minWidth: 'calc(100%)',
    maxWidth: 300,
  }, 
  primaryButton: {
    backgroundImage: "linear-gradient(90deg, rgba(17,153,142,1) 0%, rgba(56,239,125,1) 100%)",
    textTransform: "lowercase",
    margin: "30px 10px",
    borderRadius: "20px",
    color: "white",
    fontSize: "1em",
    width: "75px"
  },
  secondaryButton: {
    textTransform: "lowercase",
    color: "rgba(17,153,142,1)",
    margin: "30px 10px",
    borderRadius: "20px",
    borderColor: "rgba(17,153,142,1)",
    fontSize: "1em",
    width: "75px"
  }, 
  errorMessage: {
    color: "red",
    fontSize: "0.8rem"
  }
}));

export default useStyles;
