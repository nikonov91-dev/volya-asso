import { useTranslation } from 'react-i18next';
import './CollecteAide.scss';
import { Card } from 'react-bootstrap';
import { events } from './fixtures';
import { JoinUs } from './JoinUs';
import aideHumanPNG from './our-goals/collecte-laide-humanitaire.png';

export const CollecteAide = () => {
  const { t } = useTranslation();
  return (
    <div className="collecte-aide">
      <h1>{t('Collecte de l’aide humanitaire')}</h1>
      this page has to be specified better
      <div className={'chiffres'}>
        <img className="" src={'/our-goals/collecte-laide-humanitaire.png'} alt={t('Collecte de l’aide humanitaire')} />

      </div>
      <JoinUs />
    </div>
  );
};
