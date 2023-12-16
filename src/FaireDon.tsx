import { useTranslation } from 'react-i18next';

import './FaireDon.scss';
import { JoinUs } from './JoinUs';
import dotGroupSVG from './assets/dot-group.svg';

export function FaireDon() {
  const { t } = useTranslation();
  return (
    <div className="faire-don">
      <h1>{t('Faire un don')}</h1>
      <div className="CTA-group">
        <div className="left-column">
          <img src={dotGroupSVG} />
          <button className="big-btn btn btn-primary">{t('remplire le formulaire')}</button>
        </div>
        <div className="right-column">
          <span>{t('envoyer nous votre check')}</span>
          <span>rue rue Fake Adresse, 00000, Nantes</span>
          <span>{t('ou')}</span>
          <span>{t('contactez-nous')}</span>
          <span>{t('pour savoir plus')}</span>
          <span>volya.email@domain.com</span>
        </div>
      </div>
      <div className="utilisation-dons">
        <h2>{t('Comment on utilise vos dons')}</h2>
        <p>
          {t(
            'Lorem ipsum dolor sit amet consectetur. A mi feugiat enim consequat vitae at egestas felis. Lectus nibh tellus tellus eget sed felis. Feugiat enim consequat vitae at egestas felis.'
          )}
        </p>
        <h4>{t('Nos projets:')}</h4>
        <ul>
          <li>{t('Achat de produits essentiels  pour l&quot;Ukraine ; ')}</li>
          <li>{t('Inclusion et apporté de l&quot;aide aux deplacés ; ')}</li>
          <li>{t('Organisation des événements culturels caritatifs.')}</li>
        </ul>
      </div>
      <JoinUs />
    </div>
  );
}
