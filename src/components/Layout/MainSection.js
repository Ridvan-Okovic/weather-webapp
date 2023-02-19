import React from 'react';

const MainSection = (props) => {
  const actual = (props.temperature.temp - 273.15).toFixed(0);
  const feelsLike = (props.temperature.feels_like - 273.15).toFixed(0);

  return (
    <div className="w-[60%] h-[20rem] my-20 px-4 border-2 border-gray-400 rounded-2xl ml-[20%] mr-[20%] py-8">
      <h2 className=" mb-8 text-center text-3xl text-gray-400">
        {props.cityDetails.name}, {props.cityDetails.state}
      </h2>

      <div className="border-2 border-gray-400 rounded-xl max-w-[30%] py-8 flex items-center justify-center flex-col">
        <label className="text-2xl font-bold text-teal-400">Temperature:</label>
        <div className=" flex flex-row text-lg text-gray-400">
          <h2 className="mr-2">Actual:</h2>
          <p>
            <span className="text-xl text-teal-400">{actual}</span> °C
          </p>
        </div>
        <div className="flex text-lg text-gray-400 items-start">
          <h2 className="mr-2">Feels Like:</h2>
          <p>
            <span className="text-xl text-teal-400">{feelsLike}</span> °C
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
