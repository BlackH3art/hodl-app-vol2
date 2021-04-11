import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  historyTransactionsContainer: {
    width: '100%',
    paddingBottom: "50px"
  },
  tableHead: {
    fontWeight: 600,
    color: "rgba(17,153,142,1)",
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
  date: {
    fontSize: "0.875rem",
    color: "black",
  },
  buy: {
    color: "#3CFB47",
  },
  sell: {
    color: "red",
  },
}));

export default useStyles;