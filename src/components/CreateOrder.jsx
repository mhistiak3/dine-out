import { useState } from "react";
import calculatePrice from "../utils/calculatePrice";
import findOrder from "../utils/findOrder";
import MenuItemList from "./MenuItemList";

const CreateOrder = ({ placeOrder }) => {
  const [order, setOrder] = useState({
    id: 0,
    customerName: "",
    itemList: [],
    status: "pending",
  });
  // Handle Menu Items
  const handleMenuItem = (item) => {
    const isInclude = findOrder(order.itemList, item.title);
    if (isInclude) {
      setOrder({
        ...order,
        itemList: [...order.itemList.filter((i) => i.title !== item.title)],
      });
    } else {
      setOrder({ ...order, itemList: [...order.itemList, item] });
    }
  };

  // Handle Order
  const handleOrder = () => {
    if (!order.customerName || order.itemList.length === 0) {
      alert("Customer name and Menu is required");
    } else {
      placeOrder(order);
      setOrder({
        id: 0,
        customerName: "",
        itemList: [],
        status: "pending",
      });
    }
  };

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
          required
          value={order.customerName}
          onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
        />
      </div>

      {/* <!-- Choose Items --> */}
      <MenuItemList
        handleMenuItem={handleMenuItem}
        orderItemList={order.itemList}
      />

      {/* <!-- Place Order Button --> */}
      <button
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
        onClick={handleOrder}
      >
        Place Order (BDT {calculatePrice(order.itemList)})
      </button>
    </div>
  );
};

export default CreateOrder;
