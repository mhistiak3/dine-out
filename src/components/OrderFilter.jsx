const OrderFilter = ({ handleFilter }) => {
  return (
    <div className="flex gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-funnel-icon lucide-funnel"
      >
        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
      </svg>
      <select
        className="appearance-none bg-light/5 accent-orange-600 border-none outline-none rounded-sm px-3 py-1"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value={"all"}>All</option>
        <option value={"pending"}>Pending</option>
        <option value={"delivered"}>Delivered</option>
      </select>
    </div>
  );
};

export default OrderFilter;
