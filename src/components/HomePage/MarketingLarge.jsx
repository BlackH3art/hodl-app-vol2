import { Button, Grid, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import useStyles from "./homePage.styles"


const MarketingLarge = ({ user, laptop }) => {

  const classes = useStyles()

  return (
    <>
      <Grid container spacing={2} justify="center" alignItems="center" >

        <Grid item className={classes.marketingContainer}>
          <div>
            <Typography className={classes.actionHeading} variant="h2">Śledź swoje portfolio</Typography>
            <Typography>Łatwo zarządzają swoim kapitałem i pozycją na rynku kryptowalut</Typography>
          </div>

          <Link to={user ? '/application/open-positions' : '/auth'}>
            <Button className={classes.actionButton} variant="outlined" color="primary">App</Button>
          </Link>
        </Grid>

        <Grid item>
          <img className={classes.img} src={laptop} alt="" />
        </Grid>

      </Grid>
    </>
  )
}

export default MarketingLarge;