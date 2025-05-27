const SummeryCard = ({ classNames, title, number ,numberColor}) => {
  return (
    <div className="bg-light/10 rounded-lg p-4 relative overflow-hidden">
      <div className={`text-5xl font-bold ${numberColor}  mb-2`}>{number}</div>
      <div
        className={`${classNames}  text-xs font-medium px-3 py-1 rounded-full inline-block`}
      >
        {title}
      </div>
    </div>
  );
};

export default SummeryCard;
