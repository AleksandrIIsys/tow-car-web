import type { Metadata } from 'next';
// import { NextIntlClientProvider } from 'next-intl';
// import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tow car',
  description: 'web application tow car',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  // Using internationalization in Client Components

  return (
    <html lang="ru" suppressHydrationWarning>
      <body >
        {children}
      </body>
    </html>
  );
}
