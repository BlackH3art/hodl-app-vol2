import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  settingsContainer: {
    display: "flex",
    position: "absolute",
    right: "0px",
    top: "80px",
    height: "170px",
    width: "200px",
    paddingRight: "0",
    paddingLeft: "0",
    backgroundColor: "#393939",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "2px 4px 10px -1px #5B5456",
  },
  settingTitle: {
    paddingTop: "10px"
  },
  list: {
    width: "100%"
  },
  icon: {
    color: "white",
    width: "40px"
  },
  listItem: {
    color: "white",
    textTransform: "none",
    padding: "0 0",
    width: "100%",
    textAlign: "left",
    transition: ".3s",
    '&:hover': {
      backgroundColor: "#555555"
    }
  },
  dangerAction: {
    '&:hover': {
      color: "red"
    }
  },
  divider: {
    color: "white"
  }
}));

export default useStyles;