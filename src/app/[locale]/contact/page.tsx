import { ContactForm } from '@/components/Forms/ContactForm';

import { ContactInfo } from './components/contactInfo';
import { MapSection } from './components/map';

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
