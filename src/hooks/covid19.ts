import {useEffect, useState} from 'react';
import {Covid19Country, Covid19Summary} from '~/types/covid19';

type Covid19CountriesStatus = 'idle' | 'pending' | 'fullfilled' | 'rejected';

export function useCovid19Countries() {
  const [status, setStatus] = useState<Covid19CountriesStatus>('idle');
  const [countries, setCountries] = useState<Covid19Country[]>([]);
  const [sort, setSort] = useState<number>(0);

  const sortMostAffected = (sort: number) => {
    const clone = [...countries];
    if (sort === 0) {
      return clone.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    }

    if (sort === 1) {
      return clone.sort((a, b) => b.TotalDeaths - a.TotalDeaths);
    }

    if (sort === 2) {
      return clone.sort((a, b) => a.TotalRecovered - b.TotalRecovered);
    }

    return countries;
  };

  useEffect(() => {
    (async () => {
      setStatus('pending');
      const res = await fetch('https://api.covid19api.com/summary');
      if (res.status >= 400) {
        setStatus('rejected');
      }

      const data: Covid19Summary = await res.json();
      if (data.Countries) {
        setCountries(data.Countries);
      }

      setStatus('fullfilled');
    })();
  }, []);

  return {
    status,
    data: sortMostAffected(sort),
    sort,
    setSort,
  };
}
