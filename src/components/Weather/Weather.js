import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const Weather = (props) => {
  const actual = (props.temperature.temp - 273.15).toFixed(0);
  const feelsLike = (props.temperature.feels_like - 273.15).toFixed(0);
  const deg = props.wind.deg;

  let rotateClass = 'text-teal-400 text-xl mb-1 ';

  if (deg === 0) {
    rotateClass += '-rotate-45';
  } else if (deg === 90) {
    rotateClass += 'rotate-45';
  } else if (deg === 180) {
    rotateClass += 'rotate-[135deg]';
  } else if (deg === 270) {
    rotateClass += 'rotate-[225deg]';
  } else if (deg === 360) {
    rotateClass += 'rotate-[315deg]';
  } else if (deg > 0 && deg < 90) {
    rotateClass += 'rotate-0';
  } else if (deg > 90 && deg < 180) {
    rotateClass += 'rotate-90';
  } else if (deg > 180 && deg < 270) {
    rotateClass += 'rotate-180';
  } else if (deg > 270 && deg < 360) {
    rotateClass += 'rotate-[270deg]';
  }
  return (
    <div className="max-w-[70%] font-segoe max-h-[50rem] mx-auto my-20 px-4 bg-gray-50 shadow-lg rounded-2xl py-8">
      <h2 className=" mb-4 text-center font-segoe text-3xl font-bold text-gray-400 ">
        {props.cityDetails.name}, {props.cityDetails.state}
      </h2>

      <div className="flex flex-row justify-evenly flex-wrap">
        <div className="sm:w-[80%] sm:mb-8 lg:w-[30%] px-10 border shadow-lg rounded-md cursor-default py-4 flex flex-col items-center justify-evenly font-bold hover:scale-105 transition-all duration-300">
          <label className="text-2xl font-bold text-teal-400 text-center">
            Temperature:
          </label>
          <div className=" flex flex-row text-lg text-gray-400 items-baseline">
            <h2 className="mr-2">Actual:</h2>
            <p>
              <span className="text-xl text-teal-400">{actual}°C</span>
            </p>
          </div>
          <div className="flex text-lg text-gray-400 items-baseline">
            <h2 className="mr-2">Feels Like:</h2>
            <p>
              <span className="text-xl text-teal-400">{feelsLike}°C</span>
            </p>
          </div>
        </div>

        <div className="sm:w-[80%] justify-evenly sm:mb-8 lg:w-[30%]  bg-slate-200 opacity-90 shadow-lg rounded-md py-4 cursor-default flex flex-col items-center font-bold hover:scale-105 transition-all duration-300">
          <label className="text-2xl font-bold text-teal-500 text-center">
            Weather:
          </label>
          <div className=" flex flex-row text-lg text-gray-600 items-baseline">
            <h2 className="mr-2">Description:</h2>
            <p>
              <span className="text-xl text-teal-500">
                {props.weather.main}
              </span>
            </p>
          </div>
          <div className="flex text-lg text-gray-600  items-center">
            <img
              className="h-[70px] p-0 m-0"
              src={`http://openweathermap.org/img/w/${props.weather.icon}.png`}
              alt="#"
            />
          </div>
        </div>

        <div className="sm:w-[80%] justify-evenly sm:mb-8 lg:w-[30%] border shadow-lg py-4 rounded-md cursor-default flex flex-col items-center hover:scale-105 font-bold transition-all duration-300">
          <label className="text-2xl font-bold text-teal-400 text-center">
            Wind:
          </label>
          <div className="flex text-lg text-gray-400 items-end">
            <h2 className="mr-2">Direction:</h2>
            <FaLocationArrow className={rotateClass} />
          </div>
          <div className="flex text-lg text-gray-400 items-baseline">
            <h2 className="mr-2">Speed:</h2>
            <p>
              <span className="text-xl text-teal-400">
                {props.wind.speed}km/h
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
