import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  form: {
    display: "grid",
    gridTemplateColumns: "70% 30%",
    
  }, 
  secondaryTxt: {
    fontSize: "0.875rem",
    color: "#7A7774",
    paddingRight: "15px"
  },
  labelClass: {
    display: "flex", 
    flexDirection: "column-reverse"
  },
  labelInputContainer: {
    display: "grid",
    gridTemplateColumns: "70% 30%",
  },
  sellButtonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default useStyles;