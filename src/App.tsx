import { Routes, Route } from 'react-router';

import './App.scss';
import { Navigation } from './Navigation';
import { Home } from './Home/Home';
import { Events } from './Events';

import { Container } from 'react-bootstrap';
import { Footer } from './Footer';

export const HOME_LINK = process.env.PUBLIC_URL + '/'
export const EVENTS_LINK = process.env.PUBLIC_URL + '/evenements'

function App() {
  return (
    <div className="App">
      <div className="top-background-container">
        <div />
      </div>

      <Navigation />

      <Container className='body-container'>
        <Routes>
          <Route path={HOME_LINK} element={<Home />}/>
          <Route path={EVENTS_LINK} element={<Events />}/>
        </Routes>
      </Container>

      <Footer/>
    </div>
  );
}

export default App;
