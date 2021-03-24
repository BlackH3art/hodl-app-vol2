import React from 'react';
import { Paper, Typography } from '@material-ui/core';


import useStyles from './infoSquare.styles';

const InfoSquare = ({ title, info, percent = '' }) => {

  const classes = useStyles();

  const gainOrLossColor = percent.startsWith('-') ? classes.loss : classes.gain;

  return (
    <>
      <Paper elevation={0} className={classes.infoContainer}>
        
        <Typography variant="h6" className={classes.subtitle}>
          {title}
        </Typography>
        <Typography className={`${classes.info}`}>
          {info}
        </Typography>
        
        {percent && (
          <Typography className={`${classes.info} ${classes.percent} ${gainOrLossColor}`}>
            {percent}
          </Typography>
        )}

      </Paper>
    </>
  )
}

export default InfoSquare;