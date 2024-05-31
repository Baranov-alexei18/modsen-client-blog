import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';

import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import { locales } from '@/config';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {params: {locale: string}}) {
  const t = await getTranslations({ locale, namespace: 'Manifest' });

  return {
    title: t('title'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {children: ReactNode, params: {locale: string}}) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
