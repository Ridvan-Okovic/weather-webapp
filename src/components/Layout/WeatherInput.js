import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const WeatherInput = (props) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let inputClass =
    'outline-none rounded-none bg-transparent border-b-2 border-gray-300 font-segoe py-2  mr-8 w-full h-full text-xl active:outline-2 text-teal-300 focus:border-teal-300 hover:border-teal-400 transition-colors duration-500';

  let formIsValid = false;

  if (name.trim() !== '') {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  async function fetchCoordinates() {
    setError(false);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Error while fetching.');
      }

      const data = await response.json();

      const cityDetails = { name: data[0].name, state: data[0].country };

      props.onAddCityDetails(cityDetails);

      const latitude = data[0].lat;
      const longitude = data[0].lon;

      props.setLatitude(latitude);
      props.setLongitude(longitude);
      fetchForecast(latitude, longitude);
    } catch (error) {
      props.setIsResponseOk(false);
      setError(error.message);
    }
  }

  async function fetchForecast(latitude, longitude) {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Error while fetching the data!');
      }

      const data = await response.json();
      props.setTemperature(data.main);

      const transformedWeather = data.weather.map((weatherData) => {
        return {
          main: weatherData.main,
          description: weatherData.description,
          icon: weatherData.icon,
        };
      });

      props.setWeather(transformedWeather[0]);
      props.setWind(data.wind);
      props.setIsResponseOk(true);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (name.trim() === '') {
      return;
    }
    fetchCoordinates();
    setName('');
  };

  if (error && !formIsValid) {
    inputClass =
      'bg-red-300 outline-none border-b-2 placeholder:text-transparent border-red-500 font-segoe py-2 mr-8 w-full h-full text-xl';
  }

  return (
    <>
      <form
        onSubmit={formSubmitHandler}
        className="sm:w-[60%] md:w-[40%] m-auto my-8 flex justify-evenly"
      >
        <input
          onChange={nameChangeHandler}
          className={inputClass}
          type="text"
          placeholder="Enter a city."
          value={name}
        />
        <button
          disabled={!formIsValid}
          type="submit"
          className="bg-teal-300 disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-gray-400 disabled:text-gray-800 disabled:border-gray-500 border-2 border-teal-300 px-4 py-2 rounded-xl hover:bg-opacity-50 focus:border-teal-300 transition-all duration-300"
        >
          <FaSearch />
        </button>
      </form>

      {error && !formIsValid && !isLoading && (
        <p className="text-2xl text-[#e1e1e1] text-center font-segoe">
          Wrong input. Please try another city.
        </p>
      )}

      {isLoading && (
        <p className="text-2xl text-[#e1e1e1] text-center font-segoe">
          Loading forecast information...
        </p>
      )}
    </>
  );
};

export default WeatherInput;
