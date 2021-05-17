import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import useStyles from './app.styles';
import MainNav from './components/MainNav/MainNav';
import BalanceInfo from './components/BalanceInfo/BalanceInfo';
import AddCoinForm from './components/AddCoinForm/AddCoinForm';
import Footer from './components/Footer/Footer';

const App = () => {

  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null)

  return ( 
    <>
      <Router>
        <div className={classes.wholeAppContainer}>
          <MainNav />
          
          <AddCoinForm currentId={currentId} setCurrentId={setCurrentId} />
          <BalanceInfo setCurrentId={setCurrentId} />

        </div>
        
        <Footer />
      </Router>
    </>
   );
}
 
export default App;


// problemy
// 1. dublowanie coinów w reduxie przy przejściach open positions / portfolio
// 2. przy dodawaniu brak odświeżenia i pobrania ceny dodawanaego coina --------- rozwiązane
// 3. po usunięciu coina z open postitions, coin nie usuwa się z "portfolio" ---------- rozwiązane
// 4. w historii nie pobiera się ikona usuniętego z open positions elementu. ---------- rozwiązane 
// 5. przechodząc do historii wysyłana jest akcja fetchująca ceny z CMC a nie jest to potrzebne 
//    - utworzyć odrębną akcję dla itemów w historii która odpytuje bazę danych po logo coinów. --------- rozwiązane
// 6. problem z pobieraniem logo, historia fetchuje się asynchronicznie a useEffekt się nie odpala --------- rozwiązane
//    - wymagane jest teraz odpalenie komponentu BalanceInfo przed otwarciem historii
// 7. przechodząc na "Portfolio", dwukrotnie wysyłana jest akcja fetchująca ceny z CMC - CoinList komponent.
// 8. wyświetlić komunikat błędu pod inputem --------- rozwiązane
// 9. input reaguje na błąd, ale najpierw transakcja jest wysłana --------- rozwiązane
// 10. przerobić store errorów na obiekt --------- rozwiązane
// 11. zrobić quantity i price na wymagane pola i wyświetlać błędy jak są puste --------- rozwiązane
