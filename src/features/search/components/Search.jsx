/* eslint-disable no-unused-vars */
import { useState, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { useDebouncedState } from '@mantine/hooks';

import { ROLES } from '@/shared/constants/roles';
import { searchApiDemo } from '@/shared/services/searchApi';
import {
  CLIENT_CRITERIA,
  FREELANCER_CRITERIA,
} from '@/shared/constants/searchCriteria';

import { SearchMobile } from './SearchMobile';
import { SearchDesktop } from './SearchDesktop';

export const Search = memo(() => {
  // Debounces and stores the query every 200m
  const [query, setQuery] = useDebouncedState('', 200);
  const [criteria, setCriteria] = useState('category');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.user);
  const { role } = user;

  const { CLIENT } = ROLES;
  const criterias = role === CLIENT ? CLIENT_CRITERIA : FREELANCER_CRITERIA;

  useEffect(() => {
    const getSearchResult = async () => {
      setLoading(true);

      try {
        const arg = { criteria, query };
        const response = await searchApiDemo(arg);
        const { success, data } = response;

        if (success === true) setResult(data);
      } catch (error) {
        // Handle the network error...
      } finally {
        setLoading(false);
      }
    };

    if (criteria && query) getSearchResult();
  }, [criteria, query]);

  return (
    <>
      <SearchDesktop
        query={query}
        storeQuery={setQuery}
        result={result}
        loading={loading}
        criteria={criteria}
        criteriaList={criterias}
        setCriteria={setCriteria}
      />

      <SearchMobile
        query={query}
        storeQuery={setQuery}
        result={result}
        loading={loading}
        criteria={criteria}
        criteriaList={criterias}
        setCriteria={setCriteria}
      />
    </>
  );
});
