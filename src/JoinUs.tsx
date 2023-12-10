import { useTranslation } from 'react-i18next';
import dotGroupSVG from './assets/dot-group.svg';
import { Button } from 'react-bootstrap';
import './JoinUs.scss';

export const JoinUs = () => {
  const { t } = useTranslation();
  return (
  <div className="volya-join-us-container">
    <img src={dotGroupSVG} />
    <img src={dotGroupSVG} />
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
)};