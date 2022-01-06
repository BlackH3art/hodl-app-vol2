import { Typography } from "@material-ui/core";
import useStyles from "./infoRow.styles";

const InfoRow = ({ title, info, percent }) => {

  const classes = useStyles();

  return (
    <>
      <div className={classes.infoRow}>

        <Typography>
          {title}
        </Typography>

        <Typography>
          {info}

          {percent && (
            <Typography>
              {percent}
            </Typography>
          )}
        </Typography>

      </div>
    </>
  )
}

export default InfoRow;