import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  infoContainer: {
    marginBottom: "100px",
    // backgroundColor: "#ffc500",
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    fontFamily: ""

  },
  subtitle: {
    color: "rgba(17,153,142,1)",
    fontWeight: 600,
    marginLeft: "30px",
  },
  info: {
    marginRight: "50px",
    fontSize: "1.8em",
    alignSelf: "flex-end",
  },
  percent: {
    fontSize: "1.3em",
  },
  gain: {
    color: "#36E64B",
  },
  loss: {
    color: "red",
  }
}));

export default useStyles;