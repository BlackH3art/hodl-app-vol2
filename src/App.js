import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppContextProvider } from './Context/AppContext';

import MainNav from './components/MainNav/MainNav';
import HomePage from './components/HomePage/HomePage';
import AuthForm from './components/AuthForm/AuthForm';
import Application from './components/Application/Application';
import Footer from './components/Footer/Footer';
import DeleteUser from './components/DeleteUser/DeleteUser';
import Policy from './components/Policy/Policy';
import NotFound from './components/NotFound/NotFound';

import './app.styles.css';

const App = () => {


  return ( 
    <>
      <AppContextProvider>
        <Router>
          <MainNav />

          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/auth" component={AuthForm} exact />
            <Route path="/application" component={Application} />
            <Route path="/user/delete-acount" component={DeleteUser} />
            <Route path="/polityka-prywatnosci" component={Policy} />
            <Route component={NotFound} />
          </Switch>
          
          <Footer />
        </Router>
      </AppContextProvider>
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
// 12. balanceInfo setState kumuluje się cały czas przy rerenderze komponentu bez usuwania poprzedniej wartości ----------- rozwiązane 
// 13. czyścić reduxowy store po wylogowaniu, usunięciu użytkownika
