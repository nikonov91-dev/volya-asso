import { useTranslation } from 'react-i18next';

export const Events = () => {
  const { t } = useTranslation();
  return (
    <div className='events'>
      <h1>{t('Événements')}</h1>
      <div className="description">
        {t(
          'Découvrez comment soutenir l’Ukraine : faites un don, signez une pétition, participez à des manifestations ou à des campagnes de sensibilisation. Rejoignez-nous aujourd’hui pour que l’Ukraine connaisse la gloire demain !'
        )}
      </div>
    </div>
  );
};
