import { useQuery } from 'react-query';
import { getCountries } from '../../api/countries';
import CountryCard from '../../components/CountryCard';

const CountriesContainer = () => {
  const { data, isLoading } = useQuery('countries', getCountries);
  return <CountryCard />;
};

export default CountriesContainer;
