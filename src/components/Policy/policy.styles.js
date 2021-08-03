import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    backgroundImage: "linear-gradient(90deg, rgba(17,153,142,0.65) 0%, rgba(17,153,142,0.35) 20%, rgba(56,239,125,0.30) 80%, rgba(56,239,125,0.55) 100%)",
  },
  policyContainer: {
    marginTop: "2rem",
    padding: theme.spacing(2),
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    fontSize: "2.5rem",
    padding: "2rem 0 .8rem",
    color: "rgba(17,153,142,1)",
  },
  orderedList: {
    listStyle: "none",
    counterReset: "counter",
    padding: "0 1.5rem"
  },
  unordereList: {
    listStyleType: "none",
    listStylePosition: "inside",
    padding: "0 1.5rem",
  },
  orderedListElement: {
    counterIncrement: "counter",
    '&::before': {
      content: 'counter(counter) ". "',
      color: "rgba(17,153,142,1)",
      fontWeight: "bold"
    }
  },
  unorderedListElement: {
    '&::before': {
      content: '"•"',
      display: "inline-block",
      width: "1rem",
      color: "rgba(17,153,142,1)",
    }
  },
  policyPoint: {
    fontSize: "2rem",
    padding: "2rem 0 .8rem",
    color: "rgba(17,153,142,1)",
  },
  sourceLink: {
    color: "black",
    transition: '.2s',
    '&:hover': {
      color: "rgba(17,153,142,1)"
    }
  }
}));

export default useStyles;