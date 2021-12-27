import { Container, Grid, Link, Typography } from '@material-ui/core';
import end from '../../images/end.jpg';
import useStyles from './notFound.styles';

const NotFound = () => {

  const classes = useStyles();

  return (
    <>
      <Container className={classes.notFoundContainer}>
        <Grid container spacing={2} justify="center" alignItems="center" direction='column'>
          <Grid item sm={12}>
            <Typography className={classes.notFound} variant='h3'>
              404 Not Found
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <img className={classes.endSign} src={end} alt="Not found" />
          </Grid>
          <Grid>
            <Typography>
              Page that you looking for doesn't exists. 
            </Typography>
            <Link href="/">
              Go back to main page.
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default NotFound;