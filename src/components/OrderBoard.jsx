const OrderBoard = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      {children}
    </div>
  );
};

export default OrderBoard;
