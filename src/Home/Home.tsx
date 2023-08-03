import { Badge, Button, Card, CardImg } from 'react-bootstrap';
import { Banner } from './Banner';
import { partners, events, news } from '../fixtures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { EVENTS_LINK } from '../App';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner />

      <div className="goal-photos-container">
        <div className="photo-collect">
          <div>{t('collecte de l’aide humanitaire pour l’Ukraine')}</div>
        </div>
        <div className="photo-inclusion">
          <div>{t('Inclusion et apporté de l’aide aux deplacés')}</div>
        </div>
        <div className="photo-sensibilisation">
          <div>{t('sensibilisation et communication')}</div>
        </div>
      </div>

      <div className="volya-about-us-container">
        <img src="/dot-group.svg" />
        <div className="dummy" />
        <div className="main">
          <h2>{t('Association VOLYA')}</h2>
          <p>
            {t(
              'Nous sommes une association VOLYA, qui vise à sensibiliser la communauté locale de Loire Atlantique à la situation en Ukraine et à aider les personnes déplacées par la guerre. Nos objectifs comprennent l’aide humanitaire, la création de liens entre la France et l’Ukraine, la représentation de la communauté ukrainienne en France et l’organisation d’événements caritatifs et culturels pour promouvoir la culture ukrainienne en France. En outre, nous organisont des voyages d’intégration pour les ressortissants ukrainiens en France.'
            )}
          </p>
          <Button variant="warning" className={'info-btn'}>
            {t('en savoir plus')}
          </Button>
        </div>
      </div>

      <div className="partner-container">
        <h2>{t('Nos partenaires')}</h2>
        <ul className="partners">
          {partners.map((e) => (
            <li key={e.name}>
              <img src={`${process.env.PUBLIC_URL}/partners/${e.img}`} alt={`partner-${e.name}`} />
              <p>{e.name}</p>
            </li>
          ))}
        </ul>
        <Button className={'CTA-btn'} variant="light">
          {t('devenir partenaire')}
        </Button>
      </div>

      <div className="events-container">
        <h1 className="title">{'Événements'}</h1>
        <ul>
          {events.map((e) => (
            <li key={e.name}>
              <img src={`${process.env.PUBLIC_URL}/events/${e.img}`} alt={`partner-${e.name}`} />
              <div className="info">
                <h5 className="title">{e.name}</h5>
                <div className="date">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>{e.date}</span>
                </div>
                <div className="address">
                  <FontAwesomeIcon icon={faCrosshairs} />
                  <span>{e.address}</span>
                </div>
              </div>
              <Button variant="light">{t('Details')}</Button>
            </li>
          ))}
        </ul>
        <Link className={'all-events-btn btn btn-primary'} to={EVENTS_LINK}>
          {t('Tout les evenements')}
        </Link>
      </div>

      <div className="news-container">
        <h1>{t('Actualités')}</h1>
        <ul>
          {news.map((e) => (
            <li key={e.name}>
              <Card>
                <Card.Img src={`${process.env.PUBLIC_URL}/news/${e.img}`} alt={e.name} />
                <Card.Body>
                  <BadgePill type={e.badge as unknown as BadgePillType['type']} />
                  <Card.Text>{e.description}</Card.Text>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
        <Button variant="light">{t('Plus d’actualités')}</Button>
      </div>

      <div className="volya-join-us-container">
        <img src="/dot-group.svg" />
        <img src="/dot-group.svg" />
        <img className="join-us" src="join-us.png" />
        <div className="main">
          <h2>{t('Rejoinez-nous')}</h2>
          <p>
            {t(
              'Découvrez comment soutenir l’Ukraine: faites un don, signez une pétition, participez à des manifestations ou à des campagnes de sensibilisation. Rejoignez-nous aujourd’hui pour que l’Ukraine connaisse la gloire demain!'
            )}
          </p>
          <Button variant="light" className={'CTA'}>
            {t('Devenir benevole')}
          </Button>
        </div>
      </div>
    </>
  );
};

type BadgePillType = { type: 'event' | 'news' };

const BadgePill: FC<BadgePillType> = ({ type }) => {
  const { t } = useTranslation();
  switch (type) {
    case 'event':
      return <Badge bg="warning">{t('événement')}</Badge>;

    case 'news':
    default:
      return (
        <Badge pill bg="primary">
          {t('actualités')}
        </Badge>
      );
  }
};
