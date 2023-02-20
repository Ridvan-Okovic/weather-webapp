import React from 'react';

const MainSection = (props) => {
  const actual = (props.temperature.temp - 273.15).toFixed(0);
  const feelsLike = (props.temperature.feels_like - 273.15).toFixed(0);

  return (
    <div className="max-w-[80%] font-segoe max-h-[20rem] mx-auto my-20 px-4 bg-gray-50 shadow-lg rounded-2xl py-8">
      <h2 className=" mb-4 text-center font-segoe text-3xl text-gray-400">
        {props.cityDetails.name}, {props.cityDetails.state}
      </h2>

      <div className="flex flex-row justify-evenly">
        <div className=" w-[10rem] cursor-default py-4 flex flex-col items-center font-bold hover:scale-110 transition-all duration-300">
          <label className="text-2xl font-bold text-teal-400 text-center">
            Temperature:
          </label>
          <div className=" flex flex-row text-lg text-gray-400">
            <h2 className="mr-2">Actual:</h2>
            <p>
              <span className="text-xl text-teal-400">{actual}°C</span>
            </p>
          </div>
          <div className="flex text-lg text-gray-400">
            <h2 className="mr-2">Feels Like:</h2>
            <p>
              <span className="text-xl text-teal-400">{feelsLike}°C</span>
            </p>
          </div>
        </div>

        <div className="w-[20rem] py-4 cursor-default flex flex-col items-center font-bold hover:scale-110 transition-all duration-300">
          <label className="text-2xl font-bold text-teal-400 text-center">
            Weather:
          </label>
          <div className=" flex flex-row text-lg text-gray-400">
            <h2 className="mr-2">Main:</h2>
            <p>
              <span className="text-xl text-teal-400">
                {props.weather.main}
              </span>
            </p>
          </div>
          <div className="flex text-lg text-gray-400 items-start">
            <h2 className="mr-2">Description:</h2>
            <p>
              <span className="text-xl text-teal-400">
                {props.weather.description}
              </span>
            </p>
          </div>
        </div>

        <div className="w-[10rem] py-4 cursor-default flex flex-col items-center hover:scale-110 font-bold transition-all duration-300">
          <label className="text-2xl font-bold text-teal-400 text-center">
            Wind:
          </label>
          <div className=" flex flex-row text-lg text-gray-400">
            <h2 className="mr-2">Direction:</h2>
            <p>
              <span className="text-xl text-teal-400">{props.wind.deg}°</span>
            </p>
          </div>
          <div className="flex text-lg text-gray-400 items-start">
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

export default MainSection;
