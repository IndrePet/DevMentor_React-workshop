import { Routes, Route } from 'react-router-dom';
import CountriesContainer from '../containers/Countries';
import { RouteKey } from './routes';

const MainRouter = () => {
  return (
    <Routes>
      <Route path={RouteKey.Index} element={<CountriesContainer />} />
      <Route path={RouteKey.Countries} element={<CountriesContainer />} />
      <Route path={RouteKey.Country} element={<>Hello world</>} />
    </Routes>
  );
};

export default MainRouter;
