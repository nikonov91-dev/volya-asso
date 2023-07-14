import { Navbar, Button, Container, Nav, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

export const Navigation = () => (
  <Navbar expand="lg" className="navbar-body">
    <Container>
      <Navbar.Brand href="/">
        <Image className="nav-logo" src={process.env.PUBLIC_URL + '/logo_volya.png'} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-row">
        <Nav className="volya-navbar">
          <Nav.Link>UKR</Nav.Link>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHouse} />
          </NavLink>
          <NavLink className={'nav-link'} to="/association">
            Association
          </NavLink>
          <NavLink className={'nav-link'} to="/deplace">
            Deplacé.e.s
          </NavLink>
          <NavLink className={'nav-link'} to="/joindre">
            Nous joindre
          </NavLink>
          <Button className="faire-don-btn">Faire Don</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
