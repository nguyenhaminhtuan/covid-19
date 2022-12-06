import './CountriesTable.css';
import {Covid19Country} from '~/types/covid19';

type CountriesTableProps = {
  countries: Covid19Country[];
  onSelectCountry: (countryCode: string) => void;
};

export default function CountriesTable({
  countries,
  onSelectCountry,
}: CountriesTableProps) {
  const formatter = Intl.NumberFormat('en', {notation: 'compact'});

  return (
    <table>
      <thead>
        <tr>
          <th className="header">Rank</th>
          <th className="header">Countries</th>
          <th className="header header--warning">Cases</th>
          <th className="header header--danger">Deaths</th>
          <th className="header header--success">Recoveries</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((c, i) => (
          <tr
            key={c.ID}
            className="row"
            onClick={() => onSelectCountry(c.CountryCode)}
          >
            <td className="row d-col d-col--center">{i + 1}</td>
            <td className="row d-col d-col-country">
              <img
                src={`https://flagcdn.com/${c.CountryCode.toLowerCase()}.svg`}
                width={60}
                height={40}
                alt={c.Country}
              />
              <span className="d-col-country-name">{c.Country}</span>
            </td>
            <td className="d-col d-col--center d-col--warning">
              {formatter.format(c.TotalConfirmed)}
            </td>
            <td className="d-col d-col--center d-col--danger">
              {formatter.format(c.TotalDeaths)}
            </td>
            <td className="d-col d-col--center d-col--success">
              {formatter.format(c.TotalRecovered)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
