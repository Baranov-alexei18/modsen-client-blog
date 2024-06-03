import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

import { LINK_HOME } from '@/constants/links';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = 'en';
  const t = await getTranslations({ locale, namespace: 'Manifest' });

  return {
    name: t('name'),
    start_url: LINK_HOME,
  };
}
