import { useCallback, useEffect, useState } from 'react';
import { FaLocationArrow, FaCalendar, FaMapPin } from 'react-icons/fa';
import DailyForecast from './DailyForecast';

const Weather = (props) => {
  const [dailyForecast, setDailyForecast] = useState([]);
  const actual = (props.temperature.temp - 273.15).toFixed(0);
  const feelsLike = (props.temperature.feels_like - 273.15).toFixed(0);
  const deg = props.wind.deg;

  const today = new Date().toJSON().slice(0, 10);

  const latitude = props.lat;
  const longitude = props.lon;

  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=930928cdfa2f8537673057aeadaa0e06`;

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

  const fetchDetailedForecast = useCallback(async () => {
    const response = await fetch(URL);

    const data = await response.json();

    const transformedData = data.list.filter((forecastData) => {
      return forecastData.dt_txt.includes('12:00:00');
    });

    const finalForecast = transformedData.map((dailyData) => {
      return {
        date: dailyData.dt_txt.slice(0, 10),
        temperature: dailyData.main.temp,
        description: dailyData.weather[0].description,
        icon: dailyData.weather[0].icon,
      };
    });

    setDailyForecast(finalForecast);
  }, [URL]);

  useEffect(() => {
    fetchDetailedForecast(latitude, longitude);
  }, [latitude, longitude, fetchDetailedForecast]);

  const daily = dailyForecast.map((forecastInfo, idx) => {
    return (
      <DailyForecast
        key={idx}
        date={forecastInfo.date}
        temperature={forecastInfo.temperature.toFixed(0)}
        description={forecastInfo.description}
        icon={forecastInfo.icon}
      />
    );
  });

  return (
    <div className="max-w-[70%] font-segoe max-h-[200rem] mx-auto my-20 px-4 bg-gray-50 shadow-lg rounded-2xl py-8">
      <h2 className=" sm:text-xs md:text-xl lg:text-3xl flex flex-row justify-between max-w-[90%] mx-auto mb-4 font-segoe text-3xl font-bold text-gray-400 ">
        <p className="sm:gap-1 flex flex-row justify-center items-center md:gap-4">
          <FaMapPin className="text-teal-400" />
          {props.cityDetails.name}, {props.cityDetails.state}
        </p>
        <p className="sm:gap-1 flex flex-row justify-center items-center md:gap-4">
          {today}
          <FaCalendar className="text-teal-400" />
        </p>
      </h2>

      <div className="flex flex-row justify-evenly flex-wrap">
        <div className="sm:w-[85%] sm:mb-8 lg:w-[30%] px-10 border shadow-lg rounded-md cursor-default py-4 flex flex-col items-center justify-evenly font-bold hover:scale-105 transition-all duration-300">
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

        <div className="sm:w-[85%] justify-evenly sm:mb-8 lg:w-[30%]  bg-slate-200 opacity-90 shadow-lg rounded-md py-4 cursor-default flex flex-col items-center font-bold hover:scale-105 transition-all duration-300">
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

        <div className="sm:w-[85%] justify-evenly sm:mb-8 lg:w-[30%] border shadow-lg py-4 rounded-md cursor-default flex flex-col items-center hover:scale-105 font-bold transition-all duration-300">
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

        <div className="w-full px-[5%]">
          <p className="text-2xl font-bold text-teal-400 text-center">
            Daily Forecast
          </p>
          <div className="flex flex-row flex-wrap items-center justify-evenly cursor-default">
            {daily}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
