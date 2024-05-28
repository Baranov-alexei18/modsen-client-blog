'use client';

import { SocialGroups } from '@alexeika/client-blog-ui-kit';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { LINKS_FOOTER, SOCIAL_NETWORK_LINKS } from '@/constants/links';

import { SubscribeForm } from '../Forms/SubscribeForm';

import styles from './styles.module.scss';

const Footer = () => {
  const locale = useLocale();
  const t = useTranslations('header');

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.logo}>Modsen Client Blog</div>
        <div className={styles.actions}>
          {LINKS_FOOTER.map(({ path, name }) => <Link key={`${path}-${name}`} href={`/${locale}/${path}`}>{t(`${name}`)}</Link>)}
        </div>
      </div>
      <SubscribeForm />
      <div className={styles.row}>
        <div className={styles.info}>
          Finstreet 118 2561 Fintown
          <br />
          Hello@finsweet.com  020 7993 2905
        </div>
        <SocialGroups data={SOCIAL_NETWORK_LINKS} />
      </div>
    </footer>
  );
};

export default Footer;
