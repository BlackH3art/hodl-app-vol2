import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  deletePageWrapper: {
    backgroundImage: "linear-gradient(90deg, rgba(17,153,142,0.65) 0%, rgba(56,239,125,0.55) 100%)",
    minHeight: "80vh",
    width: "100%"
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  btn: {
    textTransform: "none",
  }, 
  deleteReasonForm: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  }
}));

export default useStyles;