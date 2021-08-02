import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    width: '80%',
    height: '40px',
    justifyContent: "space-between",
    margin: "0 auto"
  },
  socialLink: {
    color: "white",
    padding: ".2rem .2rem", 
    textDecoration: "none",
    transition: '.2s',
    '&:hover': {
      color: "#C4C0BE"
    }
  },
  link: {
    color: "#11998E",
    fontSize: '0.8rem',
    transition: '.2s',
    '&:hover': {
      color: "#0D7A71"
    }
  },
  socialContainer: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 20px 0 20px',
  },
  linksContainer: {
    display: "flex",
    alignItems: 'center',
    color: 'white',
    justifyContent: 'space-between',
    padding: '0 20px 0 20px',
    width: '200px',
  }
}));

export default useStyles;