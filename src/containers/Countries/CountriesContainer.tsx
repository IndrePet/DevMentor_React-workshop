import { Container } from '@mui/system';
import { useQuery } from 'react-query';
import { getCountries } from '../../api/countries';
import CountryCard from '../../components/CountryCard';
import PageLoader from '../../components/Loader/PageLoader';

const CountriesContainer = () => {
  const { data, isLoading } = useQuery('countries', getCountries);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Container maxWidth="md">
      <Container
        disableGutters
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: '20px',
        }}
      >
        {data?.map((country) => (
          <CountryCard key={country.country} {...country} />
        )) || <div>No Countries</div>}
      </Container>
    </Container>
  );
};

export default CountriesContainer;
