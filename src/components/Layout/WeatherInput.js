import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const WeatherInput = (props) => {
  const [name, setName] = useState('');
  const API_KEY = '930928cdfa2f8537673057aeadaa0e06';

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  async function fetchCoordinates() {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${API_KEY}`
    );

    const data = await response.json();
    console.log(data);

    const cityDetails = { name: data[0].name, state: data[0].country };

    props.onAddCityDetails(cityDetails);

    const latitude = data[0].lat;
    const longitude = data[0].lon;

    fetchForecast(latitude, longitude);
  }

  async function fetchForecast(latitude, longitude) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    const data = await response.json();
    console.log(data);
    props.setTemperature(data.main);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    fetchCoordinates();
    setName('');
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="w-[40%] m-auto my-8 flex justify-evenly"
    >
      <input
        onChange={nameChangeHandler}
        className="outline-none bg-transparent border-b-2 border-gray-300 font-segoe py-2  mr-8 w-full h-full text-xl bg-whit active:outline-2 text-teal-300 focus:border-teal-300 hover:border-teal-400 transition-colors duration-500"
        type="text"
        placeholder="Enter a city."
        value={name}
      />
      <button
        type="submit"
        className="bg-teal-300 border-2 border-teal-300 px-4 py-2 rounded-xl hover:bg-opacity-50 focus:border-teal-300 transition-all duration-300"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default WeatherInput;
