import { Typography } from "@material-ui/core";
import useStyles from "./infoRow.styles";

const InfoRow = ({ title, info, percent = '', primeInfo }) => {

  const classes = useStyles();

  const gainOrLossColor = percent.startsWith('-') ? classes.loss : classes.gain;

  return (
    <>
      <div className={classes.infoRow}>

        <Typography>
          {title}
        </Typography>

        <div>
          <Typography className={`${primeInfo  ? classes.primeInfo : ''}`}>
            {info}
          </Typography>

          {percent && (
            <Typography className={`${gainOrLossColor} ${classes.percent}`}>
              {percent}
            </Typography>
          )}
        </div>

      </div>
    </>
  )
}

export default InfoRow;