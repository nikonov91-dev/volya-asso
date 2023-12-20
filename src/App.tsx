import { Route, Routes } from 'react-router';
import { Container } from 'react-bootstrap';

import { Navigation } from './Navigation';
import { Home } from './Home/Home';
import { Events } from './Events';
import { Footer } from './Footer';
import { CollecteAide } from './CollecteAide';
import { FaireDon } from './FaireDon';
import './App.scss';
// import { ContactUs } from './ContactUs';

export const HOME_LINK = `${process.env.PUBLIC_URL}/`;
export const EVENTS_LINK = `${process.env.PUBLIC_URL}/evenements`;
export const FAIRE_DON_LINK = `${process.env.PUBLIC_URL}/faire-don`;
// export const COLLECTE_AIDE_LINK = `${process.env.PUBLIC_URL}/aide-a-collecter`;
// export const CONTACT_US_LINK = process.env.PUBLIC_URL + '/contacter-nous';
export const COLLECTE_AIDE_LINK = process.env.REACT_APP_COLLECTE_AIDE_LINK || '';
export const CONTACT_US_LINK = process.env.REACT_APP_CONTACT_US_LINK || '';

function App() {
  return (
    <div className="App">
      <div className="top-background-container">
        <div />
      </div>

      <Navigation />

      <Container className="body-container">
        <Routes>
          <Route path={HOME_LINK} element={<Home />} />
          <Route path={EVENTS_LINK} element={<Events />} />
          {/* <Route path={COLLECTE_AIDE_LINK} element={<CollecteAide />} /> */}
          <Route path={FAIRE_DON_LINK} element={<FaireDon />} />
          {/* <Route path={CONTACT_US_LINK} element={<ContactUs/>}/> */}
        </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
