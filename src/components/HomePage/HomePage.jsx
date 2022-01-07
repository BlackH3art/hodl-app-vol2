import useStyles from './homePage.styles';

import CryptoBubble from './CryptoBubble';

import laptop from '../../images/laptop.png';
import { useState } from 'react';
import { useEffect } from 'react';
import useWindowSize from '../../helpers/useWindowSize';
import MarketingLarge from './MarketingLarge';
import MarketingSmall from './MarketingSmall';

const HomePage = () => {

  const classes = useStyles();
  const cryptoBubblesIcons = [
    "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/8766.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/5631.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/3714.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/1720.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png",
    "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png"
  ];
  const [user, setUser] = useState(null);
  const [width] = useWindowSize();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[])

  // const { result } = JSON.parse(localStorage.getItem('profile'));


  return ( 
    <>
      <div className={classes.container}>
        <div className={classes.main}>
          
          {width < 500 ? <MarketingSmall user={user} laptop={laptop} /> : <MarketingLarge user={user} laptop={laptop} />}

        </div>

        <div className={classes.waveRelativeContainer}>

          {cryptoBubblesIcons.map((coin, index) => (
            <CryptoBubble key={index} classes={classes.circle} img={coin} index={index}  />
          ))}

          <div className={classes.upperWave}>
            <svg className={classes.svgWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
              <path fill="#00FF3B" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,186.7C672,149,768,75,864,69.3C960,64,1056,128,1152,138.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          <div className={classes.lowerWave}>
            <svg className={classes.svgWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
              <path fill="#fff" fillOpacity="1" d="M0,192L48,170.7C96,149,192,107,288,117.3C384,128,480,192,576,197.3C672,203,768,149,864,144C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>

        </div>

      </div>
    </>
   );
}
 
export default HomePage;