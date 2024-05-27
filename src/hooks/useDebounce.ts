import { useEffect, useState } from 'react';

const DEBOUNCE_TIMEOUT = 300;

export const useDebounce = (value: string) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, DEBOUNCE_TIMEOUT);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
