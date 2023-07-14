import { Routes, Route } from 'react-router';

import './App.scss';
import { Navigation } from './Navigation';
import { Home } from './Home/Home';
import { Container } from 'react-bootstrap';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <div className="top-background-container">
        <div />
      </div>

      <Navigation />

      <Container className='body-container'>
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}/>
        </Routes>
      </Container>

      <Footer/>
    </div>
  );
}

export default App;
