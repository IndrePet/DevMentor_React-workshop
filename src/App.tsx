import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from './components/Header';
import CountriesContainer from './containers/Countries';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledLink = styled(Link)`
  font-family: 'Space Grotesk';
`;

function App() {
  return (
    <>
      <Header />
      <CountriesContainer />
    </>
  );
}

export default App;
