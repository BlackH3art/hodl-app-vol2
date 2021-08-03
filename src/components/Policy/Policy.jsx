import useStyles from './policy.styles';
import { Container, Paper, Typography } from '@material-ui/core';

const Policy = () => {

  const classes = useStyles();

  return ( 
    <>
      <div className={classes.container}>
        <Container>
          <Paper className={classes.policyContainer} variant="outlined" >

            <div className={classes.titleContainer}>
              <Typography className={classes.title} variant="h1"> Polityka Prywatności </Typography>
            </div>

            <Typography className={classes.policyPoint} variant="h2">1. Informacje ogólne</Typography>
            <ol className={classes.orderedList}>
              <li className={classes.orderedListElement}>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <strong>www.hodl-app.pl</strong></li>
              <li className={classes.orderedListElement}>Operatorem serwisu oraz Administratorem danych osobowych jest: Jarosław Musielak, Bytom 41-902, Plac Wojska Polskiego 10/109</li>
              <li className={classes.orderedListElement}>Adres kontaktowy poczty elektronicznej operatora: <strong>jaras2803@o2.pl</strong></li>
              <li className={classes.orderedListElement}>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li>
              <li className={classes.orderedListElement}>Serwis wykorzystuje dane osobowe w następujących celach:
                <ul className={classes.unordereList}>
                  <li>Obsługa zapytań przez formularz</li>
                </ul>
              </li>
              <li className={classes.orderedListElement}>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
                <ol className={classes.orderedList}>
                  <li className={classes.orderedListElement}>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
                  <li className={classes.orderedListElement}>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</li>
                </ol>
              </li>
            </ol>

            <Typography className={classes.policyPoint} variant="h2">2. Wybrane metody ochrony danych stosowane przez Operatora</Typography>
            <ol className={classes.orderedList}>
              <li className={classes.orderedListElement}>Dane osobowe przechowywane w bazie danych są zaszyfrowane w taki sposób, że jedynie posiadający Operator klucz może je odczytać. Dzięki temu dane są chronione na wypadek wykradzenia bazy danych z serwera.</li>
            </ol>

            <Typography className={classes.policyPoint} variant="h2">3. Hosting</Typography>
            <ol className={classes.orderedList}>
              <li className={classes.orderedListElement}>Serwis jest hostowany (technicznie utrzymywany) na serwera operatora: AttHost Sp. z o.o.</li>
            </ol>

            <Typography className={classes.policyPoint} variant="h2">4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</Typography>
            <ol className={classes.orderedList}>
              <li className={classes.orderedListElement}>W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:
                <ul className={classes.unordereList}>
                  <li className={classes.unorderedListElement}>firma hostingowa na zasadzie powierzenia</li>
                  <li className={classes.unorderedListElement}>upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony</li>
                  <li className={classes.unorderedListElement}>firmy, świadczące usługi marketingu na rzecz Administratora</li>
                </ul>
              </li>
              <li className={classes.orderedListElement}>Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.</li>
              <li className={classes.orderedListElement}>Przysługuje Ci prawo żądania od Administratora:
                <ul className={classes.unordereList}>
                  <li className={classes.unorderedListElement}>dostępu do danych osobowych Ciebie dotyczących,</li>
                  <li className={classes.unorderedListElement}>ich sprostowania,</li>
                  <li className={classes.unorderedListElement}>usunięcia,</li>
                  <li className={classes.unorderedListElement}>ograniczenia przetwarzania,</li>
                  <li className={classes.unorderedListElement}>oraz przenoszenia danych.</li>
                </ul>
              </li>
              <li className={classes.orderedListElement}>Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.</li>
              <li className={classes.orderedListElement}>Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</li>
              <li className={classes.orderedListElement}>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
              <li className={classes.orderedListElement}>W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.</li>
              <li className={classes.orderedListElement}>Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.</li>
            </ol>

            <Typography className={classes.policyPoint} variant="h2">5. Informacje w formularzach</Typography>
            <ol className={classes.orderedList}>
              <li className={classes.orderedListElement}>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</li>
              <li className={classes.orderedListElement}>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
              <li className={classes.orderedListElement}>Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.</li>
              <li className={classes.orderedListElement}>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.</li>
            </ol>

            <Typography className={classes.policyPoint} variant="h2">6. Logi Administratora</Typography>
            <ol className={classes.orderedList}>
              <li className={classes.orderedListElement}>Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</li>
            </ol>

            <Typography className={classes.policyPoint} variant="h2">7. Istotne techniki marketingowe</Typography>
            <ol className={classes.orderedList}>
              <li className={classes.orderedListElement}>Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/</li>
            </ol>

            <Typography className={classes.policyPoint} variant="h2">8. Informacja o plikach cookies</Typography>
            <ol className={classes.orderedList}>
              <li className={classes.orderedListElement}>Serwis korzysta z plików cookies.</li>
              <li className={classes.orderedListElement}>Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</li>
              <li className={classes.orderedListElement}>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</li>
              <li className={classes.orderedListElement}>Pliki cookies wykorzystywane są w następujących celach:
                <ol className={classes.orderedList}>
                  <li className={classes.orderedListElement}>utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li>
                  <li className={classes.orderedListElement}>realizacji celów określonych powyżej w części "Istotne techniki marketingowe";</li>
                </ol>
              </li>
              <li className={classes.orderedListElement}>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</li>
              <li className={classes.orderedListElement}>Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</li>
              <li className={classes.orderedListElement}>Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</li>
              <li className={classes.orderedListElement}>Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).</li>
            </ol>

            <Typography className={classes.policyPoint} variant="h2">9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</Typography>
            <ol className={classes.orderedList}>
              <li>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.</li>
              <li>W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:
                <ul className={classes.unordereList}>
                  <li className={classes.unorderedListElement}><a className={classes.sourceLink} href="https://support.microsoft.com/pl-pl/microsoft-edge/wy%C5%9Bwietlanie-i-usuwanie-historii-przegl%C4%85darki-w-programie-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4" target="_blank" rel="noopener noreferrer">Edge</a></li>
                  <li className={classes.unorderedListElement}><a className={classes.sourceLink} href="https://support.microsoft.com/pl-pl/topic/jak-usun%C4%85%C4%87-pliki-cookie-w-programie-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                  <li className={classes.unorderedListElement}><a className={classes.sourceLink} href="https://support.google.com/chrome/answer/95647?hl=pl" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                  <li className={classes.unorderedListElement}><a className={classes.sourceLink} href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li className={classes.unorderedListElement}><a className={classes.sourceLink} href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=W%C5%82%C4%85czanie+i+wy%C5%82%C4%85czanie+obs%C5%82ugi+ciasteczek&redirectlocale=pl" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                  <li className={classes.unorderedListElement}><a className={classes.sourceLink} href="https://help.opera.com/pl/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer">Opera</a></li>
                </ul>
                <p>Urządzenia mobilne:</p>
                <ul className={classes.unordereList}>
                  <li className={classes.unorderedListElement}><a className={classes.sourceLink} href="https://support.google.com/chrome/answer/95647?hl=pl" target="_blank" rel="noopener noreferrer">Android</a></li>
                  <li className={classes.unorderedListElement}><a className={classes.sourceLink} href="https://support.apple.com/pl-pl/HT201265" target="_blank" rel="noopener noreferrer">Safari (iOS)</a></li>
                  <li className={classes.unorderedListElement}><a className={classes.sourceLink} href="https://support.microsoft.com/pl-pl/windows/windows-phone-7-3ebc303c-59c0-d367-3995-f258b184fabb" target="_blank" rel="noopener noreferrer">Windows Phone</a></li>
                </ul>
              </li>
            </ol>

          </Paper>
        </Container>
      </div>
    </>
  );
}
 
export default Policy;