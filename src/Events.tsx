import { useTranslation } from 'react-i18next';
import './Events.scss';
import { Card } from 'react-bootstrap';

import { events } from './fixtures';
import { JoinUs } from './JoinUs';

export function Events() {
  const { t } = useTranslation();
  return (
    <div className="events">
      <h1>{t('Événements')}</h1>
      <div className="description">
        {t(
          'Découvrez comment soutenir l&quot;Ukraine : faites un don, signez une pétition, participez à des manifestations ou à des campagnes de sensibilisation. Rejoignez-nous aujourd&quot;hui pour que l&quot;Ukraine connaisse la gloire demain !'
        )}
      </div>
      <ul>
        {events.map((e) => (
          <li key={e.name}>
            <Card>
              <Card.Img src={`${process.env.PUBLIC_URL}/events/${e.img}`} alt={e.name} />
              <Card.Body>
                <Card.Subtitle>{e.date}</Card.Subtitle>
                <Card.Title>{e.name}</Card.Title>
                <Card.Subtitle>{e.address}</Card.Subtitle>
                <Card.Text>{e.description}</Card.Text>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      <JoinUs />
    </div>
  );
}
