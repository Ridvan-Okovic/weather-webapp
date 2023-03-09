import React from 'react';
import { FaCalendar, FaTemperatureHigh, FaInfoCircle } from 'react-icons/fa';

const DailyForecast = (props) => {
  return (
    <div className="border flex flex-col items-center shadow-lg p-4 w-[11rem] rounded-lg mt-4">
      <p className="w-full flex flex-row items-center justify-center gap-2 border-b mb-2">
        <FaCalendar className="text-teal-400" />
        {props.date}
      </p>
      <p className="w-full flex flex-row items-center justify-center gap-2 border-b mb-2">
        <FaTemperatureHigh className="text-teal-400" />
        {props.temperature} °C
      </p>
      <p className="w-full flex flex-row items-center justify-center gap-2 border-b">
        <FaInfoCircle className="text-teal-400" />
        {props.description}
      </p>
      <img
        className="h-[70px] w-[70px] p-0 m-0"
        src={`http://openweathermap.org/img/w/${props.icon}.png`}
        alt="weather"
      />
    </div>
  );
};

export default DailyForecast;
