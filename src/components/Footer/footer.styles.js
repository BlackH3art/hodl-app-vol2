import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#393939",
    width: "100%",
  },
  iconsContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    paddingTop: '15px'
  }, 
  message: {
    padding: "8px 0",
    "@media (max-width: 500px)": {
      padding: "10px 10px",
      
    }

  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    textAlign: "center"
  },
  headerInputContainer: {
    display: "flex",
    alignItems: "center",
  },
  bitcoinLabel: { 
    paddingRight: "10px",
    fontSize: "2rem",
  },
  myInput: {
    fontWeight: 200,
    userSelect: "none",
    fontSize: "1rem",
    width: "400px",
    color: "#f8f9fa",
    "@media (max-width: 5000px)": {
      width: "300px"
    },
  },
  coinLogo: {
    height: "28px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    transition: '.2s',
    '&:hover': {
      color: "#C4C0BE"
    }
  }
}));

export default useStyles;