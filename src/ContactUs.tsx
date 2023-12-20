// import { useTranslation } from 'react-i18next';
import './ContactUs.scss';
// import { Button, Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faSquareFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FormEvent } from 'react';
// import { Link } from 'react-router-dom';
// import { google } from 'googleapis';
// import axios from 'axios';
// import {auth} from 'google-auth-library';
// import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';
// interface FormElements extends HTMLFormControlsCollection {
//   firstName: HTMLInputElement;
//   secondName: HTMLInputElement;
//   email: HTMLInputElement;
//   phone: HTMLInputElement;
//   message: HTMLTextAreaElement;
// }
// export const ContactUs = () => {
//   const { t } = useTranslation();
//   const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget.elements as FormElements;
//     const formData = new FormData();
//     formData.append('firstName', form.firstName.value);
//     formData.append('secondName', form.secondName.value);
//     formData.append('email', form.email.value);
//     formData.append('phone', form.phone.value);
//     formData.append('message', form.message.value);

//     const keysEnvVar = process.env['CREDS'];
//     if (!keysEnvVar) {
//       throw new Error('The $CREDS environment variable was not found!');
//     }
//     const keys = JSON.parse(keysEnvVar);

//     // const client = await auth.fromJSON(keys);

//     // if (client instanceof google.auth.JWT) {
//     //   client.scopes = ['https://www.googleapis.com/auth/drive'];
//     // }

//     // const forms = google.forms({
//     //   version: 'v1',
//     //   auth: client as JSONClient,
//     // });

//     // const newForm = {
//     //   info: {
//     //     title: 'Creating a new form in Node',
//     //   },
//     // };
//     // const res = await forms.forms.create({
//     //   requestBody: newForm,
//     // });

//     // axios({
//     //   url: 'http://localhost:4000/data/add',
//     //   method: 'POST',
//     //   data: new FormData(formData),
//     // }).then(async (data) => {
//     //   await toastr.success('Added Successfully', {
//     //     timeOut: 1000,
//     //   });
//     //   await setTimeout(() => {
//     //     window.location.reload();
//     //   }, 1000);
//     // });
//     // debugger;
//     // console.log('submitted form ', res.data);
//   };
//   return (
//     <div className="contact-us">
//       <h1>{t('Vous voulez soutenir l’Ukraine')}</h1>
//       <div className="description">
//         {t(
//           'Découvrez comment soutenir l’Ukraine : faites un don, signez une pétition, participez à des manifestations ou à des campagnes de sensibilisation. Rejoignez-nous aujourd’hui pour que l’Ukraine connaisse la gloire demain !'
//         )}
//       </div>
//       <div className="left-column">
//         <Form onSubmit={onSubmit}>
//           <Form.Group controlId="firstName">
//             <Form.Label>{t('Nom')}</Form.Label>
//             <Form.Control type="text" placeholder={t('Nom')} required />
//           </Form.Group>

//           <Form.Group controlId="secondName">
//             <Form.Label>{t('Prénom')}</Form.Label>
//             <Form.Control type="text" placeholder={t('Prénom')} required />
//           </Form.Group>

//           <Form.Group controlId="email">
//             <Form.Label>{t('Email')}</Form.Label>
//             <Form.Control type="email" placeholder={t('Email')} required />
//           </Form.Group>

//           <Form.Group controlId="phone">
//             <Form.Label>{t('Téléphone')}</Form.Label>
//             <Form.Control type="text" placeholder={t('Téléphone')} />
//           </Form.Group>

//           <Form.Group controlId="message">
//             <Form.Label>{t('Message')}</Form.Label>
//             <Form.Control as="textarea" placeholder={t('Dites nous tous')} required />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             {t('Envoyer')}
//           </Button>
//         </Form>
//       </div>
//       <div className="right-column">
//         <span>{t('trouvez-nous sur mediax sociaux')}</span>
//         <div className="socials">
//           <FontAwesomeIcon icon={faInstagram} />
//           <FontAwesomeIcon icon={faLinkedin} />
//           <FontAwesomeIcon icon={faSquareFacebook} />
//           <FontAwesomeIcon icon={faTwitter} />
//         </div>
//         <span>{t('ou')}</span>
//         <span>{t('contactez-nous')}</span>
//         <span>{t('pour savoir plus')}</span>
//         <span>volya.email@domain.com</span>
//       </div>
//     </div>
//   );
// };
