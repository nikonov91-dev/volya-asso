import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import { useEffect } from 'react';

import { events as fixture } from './fixtures';
import { JoinUs } from './JoinUs';
import './Events.scss';

export type Event = {
  name: string;
  img: string;
  date: string;
  address: string;
  description: string;
};

export const useEvents = () => {
  let events: Event[] = [];
  try {
    events = JSON.parse(process.env.REACT_APP_EVENTS as string);
  } catch {
    events = fixture;
  }

  return events;
};

export function Events() {
  const { t } = useTranslation();
  const events = useEvents();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="events">
      <h1>{t('Événements')}</h1>
      <div className="description">
        {t(
          'Découvrez comment soutenir l’Ukraine : faites un don, signez une pétition, participez à des manifestations ou à des campagnes de sensibilisation. Rejoignez-nous aujourd’hui pour que l’Ukraine connaisse la gloire demain !'
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
