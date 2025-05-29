const calculatePrice = (itemList) =>
  itemList.reduce((acc, item) => acc + Number(item.price), 0);

export default calculatePrice;
