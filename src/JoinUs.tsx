import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

import dotGroupSVG from './assets/dot-group.svg';
import './JoinUs.scss';

export function JoinUs() {
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
            'Découvrez comment soutenir l&quot;Ukraine: faites un don, signez une pétition, participez à des manifestations ou à des campagnes de sensibilisation. Rejoignez-nous aujourd&quot;hui pour que l&quot;Ukraine connaisse la gloire demain!'
          )}
        </p>
        <Button variant="light" className="CTA">
          {t('Devenir benevole')}
        </Button>
      </div>
    </div>
  );
}
