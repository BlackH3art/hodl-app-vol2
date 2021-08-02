import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


import { Link } from 'react-router-dom';

import useStyles from './bottomContainer.styles';

const BottomContainer = () => {

  const classes = useStyles();

  return (  
    <>
      <div className={classes.container}>

        <div className={classes.socialContainer}>
          <a className={classes.socialLink} href="https://github.com/BlackH3art/hodl-app-vol2" rel="noreferrer" target="_blank" > <GitHubIcon /> </a>
          <a className={classes.socialLink} href="https://www.facebook.com/profile.php?id=100002911154009" rel="noreferrer" target="_blank" > <FacebookIcon /> </a>
          <a className={classes.socialLink} href="https://www.linkedin.com/in/jaros%C5%82aw-musielak-8810961b2/" rel="noreferrer" target="_blank" > <LinkedInIcon /> </a>
        </div>

        <div className={classes.linksContainer}>
          <Link to="regulamin" className={classes.link}> Regulamin </Link>
          <Link to="polityka-prywatnosci" className={classes.link}> Polityka prywatności </Link>
        </div>
        
      </div>
    </>
  );
}
 
export default BottomContainer;