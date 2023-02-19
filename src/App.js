import { useState } from 'react';

import NavBar from './components/Layout/NavBar';
import WeatherInput from './components/Layout/WeatherInput';
import MainSection from './components/Layout/MainSection';

const App = () => {
  const [cityDetails, setCityDetails] = useState('');
  const [temperature, setTemperature] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <NavBar setIsSearchOpen={setIsSearchOpen} />
      {isSearchOpen && (
        <WeatherInput
          setTemperature={setTemperature}
          onAddCityDetails={setCityDetails}
        />
      )}
      {isSearchOpen && (
        <MainSection cityDetails={cityDetails} temperature={temperature} />
      )}
    </>
  );
};

export default App;
