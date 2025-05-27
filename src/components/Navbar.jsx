const Navbar = () => {
  return (
    <nav className="bg-light/10 rounded-full mt-4 px-8 py-3 flex justify-between items-center">
      <div className="flex items-center ">
        <div className="text-primary mr-2">
          <img src="./logo.svg" />
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-primary">Dine</span>Out
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
