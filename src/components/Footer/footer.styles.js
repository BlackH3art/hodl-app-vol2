import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#393939",
    height: "100px",
    width: "100%",
  },
  iconsContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    color: "white"
  }, 
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
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
    display: "inline-block",
    fontWeight: 400,
    // color: "#212529",
    textAlign: "center",
    verticalAlign: "middle",
    userSelect: "none",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    borderRadius: "0.25rem",
    transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    width: "350px",
    color: "#f8f9fa",
    borderColor: "#f8f9fa",
  },
  coinLogo: {
    height: "28px"
  },
  link: {
    color: "white"
  }
}));

export default useStyles;