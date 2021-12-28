import { Button, Grid, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import useStyles from "./homePage.styles"

const MarketingSmall = ({ user, laptop}) => {

  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} justify="center" alignItems="center" >

        <Grid item className={classes.marketingContainerSmall}>
          <div>
            <Typography className={classes.actionHeadingSmall} variant="h2">Śledź swoje portfolio</Typography>
            <Typography className={classes.secondaryText}>Zarządzają swoim kapitałem i pozycją na rynku kryptowalut</Typography>
          </div>
        </Grid>
        
        <Grid item>
          <img className={classes.img} src={laptop} alt="" />
        </Grid>

        <Grid item>
          <Link to={user ? '/application/open-positions' : '/auth'}>
            <Button className={classes.actionButton} variant="outlined" color="primary">App</Button>
          </Link>
        </Grid>


      </Grid>
    </>
  )
}

export default MarketingSmall;