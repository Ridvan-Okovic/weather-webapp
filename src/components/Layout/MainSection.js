import React from 'react';
import Weather from '../Weather/Weather';

const MainSection = (props) => {
  return (
    <>
      <Weather
        wind={props.wind}
        weather={props.weather}
        temperature={props.temperature}
        cityDetails={props.cityDetails}
      />
    </>
  );
};

export default MainSection;
