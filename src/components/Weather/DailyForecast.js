import React from 'react';
import { FaCalendar, FaTemperatureHigh, FaInfoCircle } from 'react-icons/fa';
import DayDate from './DayDate';

const DailyForecast = (props) => {
  return (
    <div className="border flex flex-col items-center shadow-lg p-4 rounded-lg mt-4 font-segoe text-gray-400 font-bold sm:w-[90%] sm:mb-4 md:w-[60%] lg:w-[30%]">
      <div className="w-full flex flex-row items-center justify-center gap-2 border-b mb-2">
        <FaCalendar className="text-teal-400" />
        <DayDate datum={props.date} />
      </div>
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
