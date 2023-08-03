import { Button, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faSquareFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EVENTS_LINK, HOME_LINK } from './App';

export const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className="footer-container">
      <Container>
        <div className="footer-content">
          <div className="slogan">
            <Image src={process.env.PUBLIC_URL + '/logo_volya.png'} />
            <p>{t('Mettons notre volonté au soutien de la liberté de l’Ukraine', {context: 'footer'})}</p>
          </div>

          <div className="link-categories">
            <div className="link-groups">
              <h6>{t('A Propos', {context: 'footer'})}</h6>
              <ul>
                <li><Link to={HOME_LINK}>{t('Home', {context: 'footer'})}</Link></li>
                <li>{t('Actions', {context: 'footer'})}</li>
                <li>{t("Mission", {context: 'footer'})}</li>
                <li>{t("Equipe", {context: 'footer'})}</li>
                <li><Link to={EVENTS_LINK}>{t('Événements', {context: 'footer'})}</Link></li>
                <li>{t('Legal', {context: 'footer'})}</li>
                <li>{t('Blog', {context: 'footer'})}</li>
                <li><Link to={process.env.PUBLIC_URL + '/events'}>{t('Events', {context: 'footer'})}</Link></li>
              </ul>
            </div>
            <div className="link-groups">
              <h6>{t('Refugies', {context: 'footer'})}</h6>
              <ul>
                <li>{t('Liens Utiles', {context: 'footer'})}</li>
                <li>{t('Cours FLE', {context: 'footer'})}</li>
                <li>{t('travail', {context: 'footer'})}</li>
              </ul>
            </div>
            <div className="link-groups">
              <h6>{t('Nous Rejoindre', {context: 'footer'})}</h6>
              <ul>
                <li>{t('Benevoles', {context: 'footer'})}</li>
                <li>{t('Partenaires', {context: 'footer'})}</li>
                <li>{t('Liens', {context: 'footer'})}</li>
              </ul>
            </div>
            <div className="link-groups">
              <h6>{t('Contactez-nous', {context: 'footer'})}:</h6>
              <ul>
                <li className='contacts'>
                  <a href="tel:+33712345678">{t('t', {context: 'footer'})}. 07 12 34 56 78</a>
                </li>
                <li className="email contacts">
                  <a href="mailto:volya.email@domain.com">volya.email@domain.com</a>
                </li>
                <li>
                  {t('Adresse', {context: 'footer'})}: <span className="address">rue de la Bretagne, 44000, Nantes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="socials">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <Button>{t('Faire Don')}</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
