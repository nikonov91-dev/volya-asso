import { Button } from 'react-bootstrap';

export const Banner = () => (
  <div className="banner-container">
    <h1>Mettons notre volonté au soutien de la liberté de l'Ukraine</h1>
    <div className="banner-CTA">
      <Button>DEVENIR PARTENAIRE</Button>
      <Button variant="light">BESOIN D'AIDE</Button>
    </div>
    <Button variant="danger" className={'banner-help'} children={'?'} />
  </div>
);
