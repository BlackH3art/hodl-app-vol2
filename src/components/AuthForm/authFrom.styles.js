import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    // paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundImage: "linear-gradient(90deg, rgba(17,153,142,0.65) 0%, rgba(56,239,125,0.55) 100%)",
    color: "white"
  },
  authContainer: {
    display: "flex",
    alignItems: "center",
    minHeight: "80vh",
    backgroundImage: "linear-gradient(90deg, rgba(17,153,142,0.65) 0%, rgba(17,153,142,0.35) 20%, rgba(56,239,125,0.30) 80%, rgba(56,239,125,0.55) 100%)",

  }
}));

export default useStyles;
