import { Button, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faSquareFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <div className="footer-content">
          <div className="slogan">
            <Image src={process.env.PUBLIC_URL + '/logo_volya.png'} />
            <p>Mettons notre volonté au soutien de la liberté de l’Ukraine</p>
          </div>

          <div className="link-categories">
            <div>
              <h6>A Propos</h6>
              <ul>
                <li>Actions</li>
                <li>Mission</li>
                <li>Equipe</li>
                <li>Legal</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h6>Refugies</h6>
              <ul>
                <li>Liens Utiles</li>
                <li>Cours FLE</li>
                <li>travail</li>
              </ul>
            </div>
            <div>
              <h6>Nous Rejoindre</h6>
              <ul>
                <li>Benevoles</li>
                <li>Partenaires</li>
                <li>Liens</li>
              </ul>
            </div>
            <div>
              <h6>Contactez-nous:</h6>
              <ul>
                <li><a href="tel:+33712345678">t. 07 12 34 56 78</a></li>
                <li className='email'><a href="mailto:volya.email@domain.com">volya.email@domain.com</a></li>
                <li>Adresse: <span className='address'>rue de la Bretagne, 44000, Nantes</span></li>
              </ul>
            </div>
          </div>

          <div className="socials">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <Button>Faire un don</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
