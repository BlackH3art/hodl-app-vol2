import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  endSign: {
    height: "300px",
    padding: "0 0 30px"
  },
  notFound: {
    fontSize: "2rem",
    fontWeight: "600",
    padding: "20px 0 15px"
  },
  notFoundContainer: {
    minHeight: "80vh"
  }
}));

export default useStyles;