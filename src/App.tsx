import {useState} from 'react';
import {useCovid19Countries} from './hooks/covid19';
import Spinner from './components/Spinner';
import CountriesTable from './components/CountriesTable';
import SelectBox from './components/SelectBox';
import CountryDetailModal from './components/CountryDetailModal';

function App() {
  const {status, data: countries, sort, setSort} = useCovid19Countries();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="page">
      <div className="container">
        <h1 className="title">MOST AFFECTED COUNTRIES BY COVID-19</h1>
        <div className="center-container">
          <SelectBox
            value={sort}
            choices={[
              {name: 'Total Confirmed Cases', value: 0},
              {name: 'Number of Deaths', value: 1},
              {name: 'Least Number of Recovered', value: 2},
            ]}
            onChange={(v) => setSort(v)}
          />
        </div>
        {status === 'pending' ? (
          <Spinner fullScreen />
        ) : (
          <div>
            <CountriesTable
              countries={countries}
              onSelectCountry={(code) => setSelectedCountry(code)}
            />
          </div>
        )}
      </div>
      {selectedCountry ? (
        <CountryDetailModal
          code={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      ) : null}
    </div>
  );
}

export default App;
