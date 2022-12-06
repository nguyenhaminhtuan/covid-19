import {useEffect, useState} from 'react';
import {CountryDetail} from '~/types/country';

type CountryDetailStatus = 'idle' | 'pending' | 'fullfilled' | 'rejected';

export function useCountryDetail(code: string) {
  const [status, setStatus] = useState<CountryDetailStatus>('idle');
  const [data, setData] = useState<CountryDetail | null>(null);

  useEffect(() => {
    (async () => {
      setStatus('pending');
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      if (res.status >= 400) {
        setStatus('rejected');
      }

      const data: CountryDetail[] = await res.json();
      if (data) {
        setData(data[0]);
      }

      setStatus('fullfilled');
    })();
  }, []);

  return {status, data};
}
