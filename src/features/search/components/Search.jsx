import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDebouncedState } from '@mantine/hooks';

import { ROLES } from '@/shared/constants/roles';
import { searchApi } from '@/shared/services/searchApi';
import * as SEARCH_CRITERIA from '@/shared/constants/searchCriteria';

import { SearchMobile } from './SearchMobile';
import { SearchDesktop } from './SearchDesktop';

export function Search() {
  const { user } = useSelector((state) => state.user);
  const [value, setValue] = useDebouncedState('', 200);
  const [searchResult, setSearchResult] = useState([]);
  const [isUnavailable, setIsUnAvailable] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState('');

  const criterias = user.role === ROLES.BUYER
    ? SEARCH_CRITERIA.BUYER_CRITERIA
    : SEARCH_CRITERIA.SELLER_CRITERIA;

  const getSearchResult = useCallback(async () => {
    const searchArg = { criteria: searchCriteria, query: value };
    try {
      const result = await searchApi(searchArg);
      const { success, data } = result;

      if (success === true) {
        setSearchResult(data);
      } else {
        setIsUnAvailable(success);
      }
    } catch (error) {
      // Handle the network error...
    }
  }, [searchCriteria, value]);

  useEffect(() => {
    if (searchCriteria && value) getSearchResult();
    else setSearchResult([]);

    return () => setIsUnAvailable(false);
  }, [getSearchResult, searchCriteria, value]);

  return (
    <>
      <SearchDesktop
        searchQuery={value}
        setSearchQuery={setValue}
        result={searchResult}
        criteria={searchCriteria}
        criterias={criterias}
        setCriteria={setSearchCriteria}
      />

      <SearchMobile
        searchQuery={value}
        setSearchQuery={setValue}
        result={searchResult}
        criteria={searchCriteria}
        criterias={criterias}
        setCriteria={setSearchCriteria}
      />
    </>
  );
}
