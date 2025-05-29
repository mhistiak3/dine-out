import SummeryCard from "./SummeryCard";

const OrderSummery = ({orderList}) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* <!-- Total Orders --> */}
        <SummeryCard
          title={"Total Order"}
          numberColor={"text-yellow-500"}
          classNames={"bg-yellow-800 text-yellow-200"}
          number={orderList.length}
        />

        {/* <!-- Pending Orders --> */}
        <SummeryCard
          title={"Pending"}
          numberColor={"text-red-400"}
          classNames={"bg-red-800/50 text-red-200"}
          number={orderList.filter((order)=>order.status === "pending").length}
        />

        {/* <!-- Delivered Orders --> */}
        <SummeryCard
          title={"Delivered"}
          numberColor={"text-green-500"}
          classNames={"bg-green-800/50 text-green-200"}
          number={orderList.filter((order)=>order.status !== "pending").length}
        />
      </div>
    </div>
  );
};

export default OrderSummery;
