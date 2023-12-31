import { Navbar, Button, Container, Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import { FAIRE_DON_LINK } from './App';

export function Navigation() {
  const { t, i18n } = useTranslation();
  return (
    <Navbar expand="lg" className="navbar-body">
      <Container>
        <Navbar.Brand href="/">
          <Image className="nav-logo" src={`${process.env.PUBLIC_URL}/logo_volya.png`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-row">
          <Nav className="volya-navbar">
            <Button
              className="switch-lang"
              onClick={() => {
                console.log('changed lang', i18n.language);
                i18n.changeLanguage(i18n.language === 'fr' ? 'uk' : 'fr');
              }}
            >
              {t('nextLang')}
            </Button>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
            <NavLink className="nav-link" to="/association">
              {t('Association')}
            </NavLink>
            <NavLink className="nav-link" to="/deplace">
              {t('Deplacé.e.s')}
            </NavLink>
            <NavLink className="nav-link" to="/joindre">
              {t('Nous joindre')}
            </NavLink>
            <NavLink className="faire-don-btn btn" to={FAIRE_DON_LINK}>
              {t('Faire Don')}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
