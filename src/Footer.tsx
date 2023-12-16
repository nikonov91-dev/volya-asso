import { Container, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { COLLECTE_AIDE_LINK, CONTACT_US_LINK, EVENTS_LINK, FAIRE_DON_LINK, HOME_LINK } from './App';

export function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <Container>
        <div className="footer-content">
          <div className="slogan">
            <Image src={`${process.env.PUBLIC_URL}/logo_volya.png`} />
            <p>{t('Mettons notre volonté au soutien de la liberté de l&quot;Ukraine', { context: 'footer' })}</p>
          </div>

          <div className="link-categories">
            <div className="link-groups">
              <h6>{t('A Propos', { context: 'footer' })}</h6>
              <ul>
                <li>
                  <Link to={HOME_LINK}>{t('Home', { context: 'footer' })}</Link>
                </li>
                <li className="disabled">{t('Actions', { context: 'footer' })}</li>
                <li className="disabled">{t('Mission', { context: 'footer' })}</li>
                <li className="disabled">{t('Equipe', { context: 'footer' })}</li>
                <li>
                  <Link to={EVENTS_LINK}>{t('Événements', { context: 'footer' })}</Link>
                </li>
                <li className="disabled">{t('Legal', { context: 'footer' })}</li>
                <li className="disabled">{t('Blog', { context: 'footer' })}</li>
                {/* <li>
                  <Link to={COLLECTE_AIDE_LINK}>{t('Collecter de l&quot;aide', { context: 'footer' })}</Link>
                </li> */}
              </ul>
            </div>
            <div className="link-groups">
              <h6>{t('Refugies', { context: 'footer' })}</h6>
              <ul>
                <li className="disabled">{t('Liens Utiles', { context: 'footer' })}</li>
                <li className="disabled">{t('Cours FLE', { context: 'footer' })}</li>
                <li className="disabled">{t('travail', { context: 'footer' })}</li>
              </ul>
            </div>
            <div className="link-groups">
              <h6>{t('Nous Rejoindre', { context: 'footer' })}</h6>
              <ul>
                <li className="disabled">{t('Benevoles', { context: 'footer' })}</li>
                <li className="disabled">{t('Partenaires', { context: 'footer' })}</li>
                <li className="disabled">{t('Liens', { context: 'footer' })}</li>
              </ul>
            </div>
            <div className="link-groups">
              <h6>{t('Contactez-nous', { context: 'footer' })}:</h6>
              <ul>
                <li>
                  <Link to={CONTACT_US_LINK}>{t('Formulaire', { context: 'footer' })}</Link>
                </li>
                <li className="contacts">
                  <a href="tel:+33712345678">{t('t', { context: 'footer' })}. 07 12 34 56 78</a>
                </li>
                <li className="contacts">
                  <a href="mailto:volya.email@domain.com">volya.email@domain.com</a>
                </li>
                <li>
                  {t('Adresse', { context: 'footer' })}:{' '}
                  <span className="address">rue Fake Adresse, 00000, Nantes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="socials">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <NavLink className="btn btn-primary" to={FAIRE_DON_LINK}>
              {t('Faire Don')}
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
