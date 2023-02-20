function processOrderList(orderList, orderId, state) {
  if (state === "Processing") {
    for (let i = 0; i < orderList.length; i++) {
      if (orderList[i].id === orderId) {
        orderList[i].state = "Processing";
      }
    }
    return orderList;
  } else if (state === "Delivered") {
    for (let i = 0; i < orderList.length; i++) {
      if (orderList[i].id === orderId) {
        console.log("delivered");
        orderList = orderList.filter((order) => order.id !== orderId);
        return orderList;
      }
    }
  } else {
    return orderList;
  }
}

console.log(
  processOrderList(
    [
      { id: 1, state: "Received" },
      { id: 2, state: "Received" },
    ],
    1,
    "Processing"
  )
);
