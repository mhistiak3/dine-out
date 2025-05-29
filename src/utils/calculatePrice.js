const calculatePrice = (itemList) =>
  itemList.reduce((acc, item) => acc + item.price, 0);

export default calculatePrice;
