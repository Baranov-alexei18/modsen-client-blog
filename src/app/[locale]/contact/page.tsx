import { ContactForm } from '@/components/Forms/ContactForm';

import { ContactInfo } from './section/contactInfo';
import { MapSection } from './section/map';

import styles from '../styles.module.scss';

export default function Contact() {
  return (
    <main className={styles.main}>
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </main>
  );
}
