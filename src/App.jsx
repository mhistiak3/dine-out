import { useState } from "react";
import CreateOrder from "./components/CreateOrder";
import Navbar from "./components/Navbar";
import OrderBoard from "./components/OrderBoard";
import OrderDetails from "./components/OrderDetails";
import OrderReports from "./components/OrderReports";
import OrderSummery from "./components/OrderSummery";

function App() {
  const [orderList, setOrderList] = useState([]);

  // Create Order
  const handlePlaceOrder = (order) => {
    order.orderID =
      orderList.length > 0 ? orderList[orderList.length - 1].orderID + 1 : 1;

    setOrderList([...orderList, order]);
  };
  // Delivered Order
  const handleDeliveredOrder = (orderID) => {
    setOrderList(
      orderList.map((order) => {
        if (order.orderID === orderID) {
          order.status = "delivered";
        }
        return order;
      })
    );
  };
  // Delete Order
  const handleDeleteOrder = (orderID) => {
    setOrderList(orderList.filter((order) => order.orderID !== orderID));
  };
  return (
    <div className="container h-screen flex flex-col overflow-auto">
      <Navbar />

      <OrderBoard>
        <CreateOrder handlePlaceOrder={handlePlaceOrder} />
        <OrderDetails>
          <OrderSummery orderList={orderList} />
          <OrderReports
            orderList={orderList}
            handleDeliveredOrder={handleDeliveredOrder}
            handleDeleteOrder={handleDeleteOrder}
          />
        </OrderDetails>
      </OrderBoard>
    </div>
  );
}

export default App;
