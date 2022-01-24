import { useLocation, useSearchParams } from 'react-router-dom';
import { parseSearchUrl } from './string.utils';

export default function useQueries() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const prevQueries = parseSearchUrl(location.search);

  const getQueryByKey = (key: string, defaultValue: string): string => searchParams.get(key) || defaultValue;

  const setQueries = (addedQueries: object) => setSearchParams({ ...prevQueries, ...addedQueries });

  return [setQueries, getQueryByKey, prevQueries];
}
