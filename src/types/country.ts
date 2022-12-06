export type CountryDetail = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  capital: string[];
  region: string;
  subregion: string;
};
