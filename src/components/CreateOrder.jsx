import MenuItemList from "./MenuItemList";

const CreateOrder = () => {
  return (
    <div className="bg-light/10 rounded-lg p-6 md:h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-light/80 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      {/* <!-- Customer Name Input --> */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          className="w-full bg-dark/80  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      {/* <!-- Choose Items --> */}
      <MenuItemList/>

      {/* <!-- Place Order Button --> */}
      <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
        Place Order (BDT 0)
      </button>
    </div>
  );
};

export default CreateOrder;
