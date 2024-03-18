"use strict";

// Task: change `iterate` contract from chainable callbacks
// to Promise (chainable or you can call it with await syntax)

const iterate = (items) => {
  let i = 0;

  const iterable = () => {
    return new Promise((res, rej) => {
      res(items[i]);
      i++;
    });
  };

  return iterable;
};

const electronics = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

// Use await syntax to get items
const getItems = async () => {
  const collection = iterate(electronics);

  const first = await collection();
  const second = await collection();
  const third = await collection();

  console.log("first - ", first);
  console.log("second - ", second);
  console.log("third - ", third);
};

getItems();
