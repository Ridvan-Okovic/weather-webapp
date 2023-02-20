import { useState } from 'react';

import NavBar from './components/Layout/NavBar';
import WeatherInput from './components/Layout/WeatherInput';
import MainSection from './components/Layout/MainSection';

const App = () => {
  const [wind, setWind] = useState([]);
  const [weather, setWeather] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [cityDetails, setCityDetails] = useState('');
  const [responseOk, setIsResponseOk] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <NavBar
        setIsSearchOpen={setIsSearchOpen}
        setIsResponseOk={setIsResponseOk}
      />
      {isSearchOpen && (
        <WeatherInput
          setWeather={setWeather}
          setWind={setWind}
          setTemperature={setTemperature}
          onAddCityDetails={setCityDetails}
          setIsResponseOk={setIsResponseOk}
        />
      )}
      {responseOk && (
        <MainSection
          wind={wind}
          weather={weather}
          cityDetails={cityDetails}
          temperature={temperature}
        />
      )}
    </>
  );
};

export default App;
