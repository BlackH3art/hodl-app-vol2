import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  coinListContainer: {
    width: '100%',
    paddingBottom: "50px"
  },
  tableHead: {
    fontWeight: 600,
    color: "rgba(17,153,142,1)",

  }, 
  gain: {
    color: "#36E64B",
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
  }
}))

export default useStyles; 