import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CONTACT_US_LINK } from '../App';

export function Banner() {
  const { t } = useTranslation();
  return (
    <div className="banner-container">
      <h1>Mettons notre volonté au soutien de la liberté de l&quot;Ukraine</h1>
      <div className="banner-CTA">
        {/* <Button>DEVENIR PARTENAIRE</Button> */}
        <Button>
          <Link to={CONTACT_US_LINK} style={{ color: 'white', textTransform: 'uppercase', textDecoration: 'none' }}>
            {t('devenir partenaire')}
          </Link>
        </Button>
        <Button variant="light">
          <Link to={CONTACT_US_LINK} style={{ color: 'white', textTransform: 'uppercase', textDecoration: 'none' }}>
            {t('besoin d&quot;aide')}
          </Link>
        </Button>
      </div>
      <Button variant="danger" className="banner-help">
        ?
      </Button>
    </div>
  );
}
