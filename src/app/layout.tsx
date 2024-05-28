import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import { Header } from '@/components/Header';

import styles from './styles.module.scss';

export default function RootLayout({
  children,
  params: { locale },
}: {children: ReactNode, params: {locale: string}}) {
  return (
    <html lang={locale}>
      <body className={styles.wrapper}>
        {children}
      </body>
    </html>
  );
}
