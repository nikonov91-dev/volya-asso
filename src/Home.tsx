import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import { news, partners } from './fixtures';
import { useEvents } from './Events';
import { CONTACT_US_LINK, EVENTS_LINK } from './App';
import dotGroupSVG from './assets/dot-group.svg';
import workPNG from './assets/work-img.png';
import kalyNantesPNG from './assets/kaly-nantes.png';
import benevolePNG from './assets/benevole.png';
import boxPNG from './assets/box-img.png';
import aideHumanPNG from './assets/our-goals/collecte-laide-humanitaire.png';
import inclusionPNG from './assets/our-goals/inclusion-apporte-laide-deplaces.png';
import sensibilisationPNG from './assets/our-goals/sensibilisation-communication.png';
import './Home.scss';
import { JoinUs } from './JoinUs';

const useNews = () => {
  return news;
};

export function Home() {
  const { t } = useTranslation();
  const events = [...useEvents()].splice(0, 4);
  const allNews = useNews() || 0;
  const news = [...allNews].splice(0, 3);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-new">
      <div className="banner-container">
        <h1>Association VOLYA</h1>
        <p>Mettons notre volonté au soutien de la liberté de l’Ukraine</p>
        <Button size="lg">
          <Link to={CONTACT_US_LINK} style={{ color: 'white', textTransform: 'uppercase', textDecoration: 'none' }}>
            {t('Contactez-nous')}
          </Link>
        </Button>
      </div>

      <div className="goal-photos-container">
        <div className="img-container">
          <img src={aideHumanPNG} alt="collecte de l’aide humanitaire pour l’Ukraine" />
          <span>{t('collecte de l’aide')}</span>
        </div>
        <div className="img-container">
          <img src={inclusionPNG} alt="Inclusion et apporté de l’aide aux deplacés" />
          <span>{t('inclusion')}</span>
        </div>
        <div className="img-container">
          <img src={sensibilisationPNG} alt="sensibilisation et communication" />
          <span>{t('sensibilisation')}</span>
        </div>
      </div>

      <div className="volya-about-us-container">
        <img src={dotGroupSVG} />
        <div className="dummy" />
        <div className="main">
          <h2>{t('Association VOLYA')}</h2>
          <p>
            {t(
              'Nous sommes une association VOLYA, qui vise à sensibiliser la communauté locale de Loire Atlantique à la situation en Ukraine et à aider les personnes déplacées par la guerre. Nos objectifs comprennent l’aide humanitaire, la création de liens entre la France et l’Ukraine, la représentation de la communauté ukrainienne en France et l’organisation d’événements caritatifs et culturels pour promouvoir la culture ukrainienne en France. En outre, nous organisont des voyages d’intégration pour les ressortissants ukrainiens en France.'
            )}
          </p>
          <Button variant="warning">{t('en savoir plus')}</Button>
        </div>
      </div>

      <div className="partner-container">
        <h1>{t('Nos partenaires')}</h1>
        <ul className="partners">
          {partners.map((e) => (
            <li key={e.name}>
              <img src={`${process.env.PUBLIC_URL}/partners/${e.img}`} alt={`partner-${e.name}`} />
              <p>{e.name}</p>
            </li>
          ))}
        </ul>
        {/* <Button className={'CTA-btn'} variant="light">
          {t('devenir partenaire')}
        </Button> */}
        <Link to={CONTACT_US_LINK} className="transparent-CTA-btn">
          {t('devenir partenaire')}
        </Link>
      </div>

      <img className="img-in-the-middle" src={dotGroupSVG} />

      <div className="padded-section padded-section-1">
        <img src={kalyNantesPNG} alt={t('kaly-nantes ecole ukrainian')} />
        <div>
          <h1>{t('la première école ukrainienne à Nantes')}</h1>
          <span>
            {t(
              'Pour vous inscrire ou savoir plus de details, remplissez le formulaire d’inscription à KalyNantes et remplissez la demande d’adhésion à l’association Volya.'
            )}
          </span>
        </div>
        <Link to={CONTACT_US_LINK} className="learn-more-button btn btn-warning">
          <FontAwesomeIcon icon={faArrowRightLong} size="3x" />
          <i className="fa-solid fa-right-long" />
        </Link>
      </div>

      <div className="padded-section">
        <img src={workPNG} alt={t('trouve un travail avec l’asso Volya')} />
        <div>
          <h1>{t('aide à la recherche d’emploi')}</h1>
          <span>
            {t(
              'Si vous êtes intéressés par la recherche d’emplois en France, notamment dans le département de la Loire-Atlantique, veuillez remplir ce formulaire destiné aux déplacés fuyant la guerre en Ukraine.'
            )}
          </span>
        </div>
        <Link to={CONTACT_US_LINK} className="learn-more-button btn btn-warning">
          <FontAwesomeIcon icon={faArrowRightLong} size="3x" />
          <i className="fa-solid fa-right-long" />
        </Link>
      </div>

      <div className="padded-section">
        <img src={benevolePNG} alt={t('devenir un benevole')} />
        <div>
          <h1>{t('devenir bénévole')}</h1>
          <span>{t('Rejoignez-nous ! Приєднуйтесь до нас !')}</span>
        </div>
        <Link to={CONTACT_US_LINK} className="learn-more-button btn btn-warning">
          <FontAwesomeIcon icon={faArrowRightLong} size="3x" />
          <i className="fa-solid fa-right-long" />
        </Link>
      </div>

      <div className="padded-section">
        <img src={boxPNG} alt={t('faire un don')} />
        <div>
          <h1>{t('faire un don')}</h1>
          <span>
            {t(
              'Soutenez notre cause en faisant un don ! Votre générosité contribuera à l’achat de produits essentiels pour l’Ukraine, à l’inclusion et à l’assistance aux déplacés, ainsi qu’à l’organisation d’événements culturels caritatifs. Chaque don fait une réelle différence dans notre engagement envers ces causes essentielles.'
            )}
          </span>
        </div>
        <Link to={CONTACT_US_LINK} className="learn-more-button btn btn-warning">
          <FontAwesomeIcon icon={faArrowRightLong} size="3x" />
          <i className="fa-solid fa-right-long" />
        </Link>
      </div>

      <img className="img-in-the-middle" src={dotGroupSVG} />

      <div className="news-container">
        <h1>{t('Actualités')}</h1>
        <ul>
          {news.map((e) => (
            <li key={e.name}>
              <Card>
                <Card.Img src={`${process.env.PUBLIC_URL}/news/${e.img}`} alt={e.name} />
                <Card.Body>
                  <Card.Text>{e.description}</Card.Text>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>{' '}
        <Link to={EVENTS_LINK} className="transparent-CTA-btn btn">
          <Trans count={allNews.length}>Voir toutes les {{ count: allNews.length }} actualités</Trans>
        </Link>
      </div>

      <JoinUs />
    </div>
  );
}
