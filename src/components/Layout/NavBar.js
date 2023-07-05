import { FaCloudSunRain } from 'react-icons/fa';

const NavBar = (props) => {
  const searchBarHandler = () => {
    props.setIsSearchOpen((prev) => !prev);
    props.setIsResponseOk(false);
  };

  return (
    <header className="font-segoe px-[20%] flex items-center justify-between text-[#e1e1e1] w-full h-20 mt-4 bg-zinc-800 shadow-xl">
      <h2 className="sm:text-lg md:text-3xl font-[500] underline">
        Weather App
      </h2>
      <button
        onClick={searchBarHandler}
        className="sm:text-lg sm:px-6 md:text-lg md:px-8 lg:text-2xl lg:px-12 py-2 px-4 text-[#1f1f1f] border-2 border-teal-400 bg-teal-400 rounded-2xl hover:bg-opacity-50 hover:scale-105 focus:border-teal-400 transition-all duration-300"
      >
        <FaCloudSunRain />
      </button>
    </header>
  );
};

export default NavBar;
