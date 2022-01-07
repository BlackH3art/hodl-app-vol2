import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  infoRow: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: "5px 0"
  }, 
  gain: {
    color: "#36E64B",
  },
  loss: {
    color: "red",
  },
  percent: {
    fontSize: "0.9rem",
    fontWeight: "600"
  }, 
  primeInfo: {
    fontWeight: "600",
    fontSize: "1.2rem"
  }
}));

export default useStyles;