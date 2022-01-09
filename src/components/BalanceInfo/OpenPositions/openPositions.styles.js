import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  openTransactionsContainer: {
    width: '100%',
    paddingBottom: "50px",
    "@media (max-width: 500px)": {
      paddingRight: "0",
      paddingLeft: "0",
    }
  },
  tableHead: {
    fontWeight: 600,
    color: "rgba(17,153,142,1)",
    "@media (max-width: 500px)": {
      fontSize: ".8rem"
    }
  }, 
  gain: {
    color: "#3CFB47",
  },
  loss: {
    color: "red",
  },
  mainText: {
    fontWeight: "600",
    fontSize: ".9rem"
  },
  secondaryTxt: {
    fontSize: "0.875rem",
    color: "#7A7774",
    paddingRight: "10px",
    "@media (max-width: 500px)": {
      fontSize: ".8rem",
      padding: "0 0"
    }
  },
  cryptoAmount: {
    fontSize: "0.875rem",
    color: "#7A7774",
  },
  dateTableRow: {
    width: "100%"
  }, 
  dateCellContainer: {
    position: "relative",
  }, 
  transactionDate: {
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: "0.675rem",
    color: "#7A7774",
    marginLeft: "20px",
    width: '100px'
  },
  actionButtonContainer: {
    display: "flex", 
    height: "100%"
  }, 
  actionButtons: {
    backgroundColor: "white",
    border: "none",
    margin: "0 2px",
    cursor: "pointer"
  }, 
  tickerLogoContainer: {
    display: "flex",
    "@media (max-width: 500px)": {
      alignItems: "center"
    }
  },
  logo: {
    height: "20px",
    paddingRight: "10px"
  }, 
  tickerBox: {
    height: "100%",
  },
  tableCell: {
    paddingRight: "0"
  },
  tableCellHead: {
    paddingLeft: "0"
  },
  tableCellHeadlast: {
    paddingRight: "0"
  },
  tableCellMiddle: {
    padding: "0 2px 0 0"
  },
  doubleRowMobileWrapper: {
    display: "flex"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column"
  },
  textPrimeContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    paddingRight: ".6rem"
  },
  singleRowInfo: {
    fontWeight: "600",

  }, 
  unwindHeader: {
    paddingTop: "0.8rem",
    fontWeight: "600",
    fontSize: "0.8rem",
    fontStyle: "uppercase"
  }


}));

export default useStyles;