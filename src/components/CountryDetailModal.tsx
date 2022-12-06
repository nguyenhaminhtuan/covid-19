import {useCountryDetail} from '~/hooks/country';
import './CountryDetailModal.css';
import Spinner from './Spinner';

type CountryDetailModalProps = {
  code: string;
  onClose: () => void;
};

export default function CountryDetailModal({
  code,
  onClose,
}: CountryDetailModalProps) {
  const {status, data: country} = useCountryDetail(code);
  const formatter = Intl.NumberFormat('en', {notation: 'compact'});

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        {country === null || status === 'idle' ? (
          <Spinner />
        ) : (
          <>
            <div className="content-header">
              <img
                src={country.flags.svg}
                width={100}
                alt={country.name.common}
              />
              <div>{country.name.common}</div>
            </div>
            <div className="content-info">
              <div>
                <b>Population: </b>
                {formatter.format(country.population)}
              </div>
              <div>
                <b>Region: </b>
                {country.region}
              </div>
            </div>
            <div className="content-info">
              <div>
                <b>Capital: </b>
                {country.capital.join(', ')}
              </div>
              <div>
                <b>Subregion: </b>
                {country.subregion}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
