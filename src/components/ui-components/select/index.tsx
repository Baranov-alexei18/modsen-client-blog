import { SelectType } from './types';

import styles from './styles.module.scss';

export const SelectApp = ({
  cyId, onChange, onBlur, name, value, children,
}: Partial<SelectType>) => (
  <select
    name={name}
    data-testid={cyId}
    className={styles.wrapper}
    defaultValue={value}
    onChange={onChange}
    onBlur={onBlur}
  >
    {children}
  </select>
);
