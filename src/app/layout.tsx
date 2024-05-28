import { ReactNode } from 'react';

import '@/theme/globals.scss';

export default function RootLayout({
  children,
  params: { locale },
}: {children: ReactNode, params: {locale: string}}) {
  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
