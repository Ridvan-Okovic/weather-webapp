const NavBar = (props) => {
  const searchBarHandler = () => {
    props.setIsSearchOpen((prev) => !prev);
  };

  return (
    <header className="font-segoe px-[20%] flex items-center justify-between text-white w-full h-20 mt-4 bg-[#2f2f2f] shadow-xl">
      <h2 className=" text-3xl font-[500] underline">Weather App</h2>
      <button
        onClick={searchBarHandler}
        className=" text-xl font-[600] py-2 px-8 text-[#1f1f1f] border-2 border-teal-400 bg-teal-400 rounded-2xl hover:bg-opacity-50 hover:scale-105 focus:border-teal-400 transition-all duration-300"
      >
        Check Weather
      </button>
    </header>
  );
};

export default NavBar;
