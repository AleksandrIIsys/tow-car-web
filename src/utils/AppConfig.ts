import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'Tow Car',
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  localePrefix,
};
