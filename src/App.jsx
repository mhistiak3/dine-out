import CreateOrder from "./components/CreateOrder";
import Navbar from "./components/Navbar";
import OrderBoard from "./components/OrderBoard";
import OrderDetails from "./components/OrderDetails";
import OrderReports from "./components/OrderReports";
import OrderSummery from "./components/OrderSummery";

function App() {
  return (
    <div className="container h-screen flex flex-col overflow-auto">
      <Navbar />

      <OrderBoard>
        <CreateOrder/>
        <OrderDetails>
          <OrderSummery/>
          <OrderReports/>
        </OrderDetails>
      </OrderBoard>
    </div>
  );
}

export default App;
