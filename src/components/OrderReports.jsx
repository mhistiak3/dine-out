import calculatePrice from "../utils/calculatePrice";
import OrderFilter from "./OrderFilter";

const OrderReports = ({
  orderList,
  handleDeliveredOrder,
  handleDeleteOrder,
  handleFilter
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <OrderFilter handleFilter={handleFilter} />
      </div>
      <div className="bg-light/10 rounded-lg p-4">
        <div className="reports-container">
          {orderList.length > 0 ? (
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Customer Name</th>
                  <th className="pb-3 font-medium">Items</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* <!-- Row 1 --> */}
                {orderList.map((order) => (
                  <tr key={order.orderID} className="border-t border-gray-700">
                    <td className="py-3">{order.orderID}</td>
                    <td className="py-3">{order.customerName}</td>
                    <td className="py-3">{order.itemList.length}</td>
                    <td className="py-3">{calculatePrice(order.itemList)}</td>
                    <td className="py-3">
                      <span
                        className={`${
                          order.status === "pending"
                            ? "text-red-500"
                            : "text-green-500"
                        } uppercase`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button
                        className="bg-dark/80 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                        onClick={() => handleDeleteOrder(order.orderID)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-dark/80 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                        onClick={() => handleDeliveredOrder(order.orderID)}
                      >
                        DELIVER
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h4>No Order Found</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderReports;
