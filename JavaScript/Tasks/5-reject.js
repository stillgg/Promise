"use strict";

// Task: support rejection with an error, if no more items in
// `items` array are available to return with `.next()`
// Change throwing error to returning rejected Promise.
// Catch error with `.catch` or `try/catch` to handle it.

const iterate = (items) => {
  let index = 0;
  return {
    next: () => {
      const res = new Promise((fulfill, reject) => {
        if (index < items.length) {
          return fulfill(items[index++]);
        }
        return reject("No more items to iterate");
      });

      return res;
    },
  };
};

const electronics = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

(async () => {
  const items = iterate(electronics);
  const item1 = await items.next();
  console.log(item1);
  const item2 = await items.next();
  console.log(item2);
  const item3 = await items.next();
  console.log(item3);
  const item4 = await items.next().catch((err) => {
    console.log("err - ", err);
  });
  console.log(item4);
})();
