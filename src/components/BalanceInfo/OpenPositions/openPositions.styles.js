import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  openTransactionsContainer: {
    width: '100%',
    paddingBottom: "50px"
  },
  tableHead: {
    fontWeight: 600,
    color: "rgba(17,153,142,1)",
  }, 
  gain: {
    color: "#3CFB47",
  },
  loss: {
    color: "red",
  },
  secondaryTxt: {
    fontSize: "0.875rem",
    color: "#7A7774",
    paddingRight: "10px"
  },
  cryptoAmount: {
    fontSize: "0.875rem",
    color: "#7A7774",
  },
  dateTableRow: {
    width: "100%"
  }
}));

export default useStyles;