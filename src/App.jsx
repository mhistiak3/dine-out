import { useState } from "react";
import CreateOrder from "./components/CreateOrder";
import Navbar from "./components/Navbar";
import OrderBoard from "./components/OrderBoard";
import OrderDetails from "./components/OrderDetails";
import OrderReports from "./components/OrderReports";
import OrderSummery from "./components/OrderSummery";

function App() {
  const initialOrder = {
    orderID: 1,
    customerName: "Istiak",
    itemList: [
      { name: "Pizza slices", price: 300 },
      { name: "Hamburger", price: 600 },
    ],
    status: "pending",
  };
  const [orderList, setOrderList] = useState([initialOrder]);

  // Create Order
  const placeOrder = (order)=>{
    order.orderID = orderList.length +1
console.log(order);

    setOrderList([...orderList,order])
  }
  return (
    <div className="container h-screen flex flex-col overflow-auto">
      <Navbar />

      <OrderBoard>
        <CreateOrder placeOrder={placeOrder} />
        <OrderDetails>
          <OrderSummery orderList={orderList} />
          <OrderReports orderList={orderList} />
        </OrderDetails>
      </OrderBoard>
    </div>
  );
}

export default App;
