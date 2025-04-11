function processOrderList(orderList, orderId, state) {
  if (state === 'Processing') {
    orderList.map((order) => {
      if (order.id === orderId) {
        order.state = state;
      }
    });
  } else if (state == 'Delivered') {
    console.log('hy from here');
    orderList = orderList.filter((order) => {
      //   console.log(order.id);
      //   console.log(orderId);

      return order.id != orderId;
    });
    console.log('orderlist', orderList);
  }
  console.log(orderList);
  return orderList;
}
processOrderList(
  [
    { id: 1, state: '' },
    { id: 2, state: '' },
    { id: 3, state: '' },
    { id: 4, state: '' },
  ],
  3,
  'Delivered',
);
