import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: "white",
    overflow: "hidden"
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  marketingContainer: {
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  marketingContainerSmall: {
    textAlign: "center",
  },
  actionHeadingSmall: {
    fontSize: "1.5rem",
    fontWeight: "600" ,
    padding: "20px 0"
  },
  secondaryText: {
    padding: "0 20px"
  },
  actionButton: {
    textDecoration: "none",
    display: "block",
    fontSize: "1rem",
    fontWeight: 600,
    paddingRight: "20px",
    paddingLeft: "20px",
    backgroundImage: "linear-gradient(90deg, rgba(17,153,142,1) 0%, rgba(56,239,125,1) 100%)",
    textTransform: "none",
    margin: "30px 10px",
    borderRadius: "20px",
    color: "white",
    width: "200px",
    "@media (max-width: 500px)": {
      margin: "0 0 10px"
    }
  },
  actionHeading: {
    fontSize: "4rem",
    "@media (max-width: 1280px)": {
      fontSize: "3rem"
    },
    "@media (max-width: 480px)": {
      fontSize: "1.5rem",
    },
  },
  img: {
    height: "600px",
    "@media (max-width: 1280px)": {
      height: "300px"
    },
    "@media (max-width: 500px)": {
      padding: "0 0",
      height: "250px"
    }
  },
  waveRelativeContainer: {
    position: "relative",
  },
  svgWave: {
    display: "block"
  },
  lowerWave: {
    backgroundColor: "#00FF3B",
  },
  upperWave: {
    backgroundColor: "#fff"
  },
  circle: {
    position: "absolute",
    top: "20rem",
    left: "-4rem",
    borderRadius: "50%",
    animation: `$fly1 5000ms infinite linear`,
    backgroundSize: "cover",
    
    
  },
  "@keyframes fly1": {
    "0%": {
      transform: "translateY(4vh) translateX(-2vw)"
    },
    "10%": {
      transform: "translateY(2vh) translateX(10vw)"
    },
    "20%": {
      transform: "translateY(0vh) translateX(20vw)"
    },
    "30%": {
      transform: "translateY(-2vh) translateX(30vw)"
    },
    "35%": {
      transform: "translateY(-3.7vh) translateX(35vw)"
    },
    "40%": {
      transform: "translateY(-4vh) translateX(40vw)"
    },
    "45%": {
      transform: "translateY(-3.7vh) translateX(45vw)",
    },
    "50%": {
      transform: "translateY(-2vh) translateX(50vw)"
    },
    "60%": {
      transform: "translateY(0vh) translateX(60vw)"
    },
    "70%": {
      transform: "translateY(2vh) translateX(70vw)"
    },
    "75%": {
      transform: "translateY(3.7vh) translateX(75vw)",
    },
    "80%": {
      transform: "translateY(4vh) translateX(80vw)"
    },
    "85%": {
      transform: "translateY(3.6vh) translateX(85vw)",
    },
    "90%": {
      transform: "translateY(2vh) translateX(90vw)"
    },
    "100%": {
      transform: "translateY(0vh) translateX(102vw)"
    }
  },
  "@keyframes fly2": {
    "0%": {
      transform: "translateY(-4vh) translateX(-2vw)"
    },
    "10%": {
      transform: "translateY(-2vh) translateX(10vw)"
    },
    "20%": {
      transform: "translateY(0vh) translateX(20vw)"
    },
    "30%": {
      transform: "translateY(2vh) translateX(30vw)"
    },
    "35%": {
      transform: "translateY(3.7vh) translateX(35vw)"
    },
    "40%": {
      transform: "translateY(4vh) translateX(40vw)"
    },
    "45%": {
      transform: "translateY(3.7vh) translateX(45vw)",
    },
    "50%": {
      transform: "translateY(2vh) translateX(50vw)"
    },
    "60%": {
      transform: "translateY(0vh) translateX(60vw)"
    },
    "70%": {
      transform: "translateY(-2vh) translateX(70vw)"
    },
    "75%": {
      transform: "translateY(-3.7vh) translateX(75vw)",
    },
    "80%": {
      transform: "translateY(-4vh) translateX(80vw)"
    },
    "85%": {
      transform: "translateY(-3.6vh) translateX(85vw)",
    },
    "90%": {
      transform: "translateY(-2vh) translateX(90vw)"
    },
    "100%": {
      transform: "translateY(0vh) translateX(102vw)"
    }
  },
}));

export default useStyles;