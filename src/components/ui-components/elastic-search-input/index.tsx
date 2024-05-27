import React, { useEffect, useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';

import styles from './styles.module.scss';

export const ElasticSearch = (
  { data, onHandleClick }: { data: string[], onHandleClick: (str: string) => void },
) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(true);

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    if (debouncedQuery.length > 0) {
      const result = data.filter((tag) => tag.toLowerCase().includes(debouncedQuery.toLowerCase()));
      if (!result.length) {
        setIsSearching(true);
      }
      setResults(result);
    } else {
      setResults([]);
    }
  }, [debouncedQuery, data]);

  const handleChange = (event: { target: { value: string }; }) => {
    const { value } = event.target;
    setIsSearching(false);
    setShowResult(true);
    setQuery(value);
  };

  const handleTag = (tag: string) => {
    setQuery(tag);
    setShowResult(false);
  };

  const handleSearch = () => {
    setQuery('');
    onHandleClick(query);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search for tag..."
        value={query}
        onChange={handleChange}
        className={styles.input}
      />
      <button className={styles.button} onClick={handleSearch}>Search</button>
      {showResult && query && (
        <div className={styles.results}>
          {isSearching ? (
            <p>No results</p>
          ) : (
            results.map((result) => (
              <div
                key={result}
                className={styles.resultItem}
                onClick={handleTag.bind(null, result)}
                aria-hidden
              >
                {result}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
