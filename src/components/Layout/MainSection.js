import React from 'react';
import Weather from '../Weather/Weather';

const MainSection = (props) => {
  const lat = props.latitude;
  const lon = props.longitude;
  return (
    <>
      <Weather
        lat={lat}
        lon={lon}
        wind={props.wind}
        weather={props.weather}
        temperature={props.temperature}
        cityDetails={props.cityDetails}
      />
    </>
  );
};

export default MainSection;
