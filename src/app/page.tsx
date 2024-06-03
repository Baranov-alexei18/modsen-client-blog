import { redirect } from 'next/navigation';

import { LINK_HOME } from '@/constants/links';

export default function RootPage() {
  redirect(LINK_HOME);
}
