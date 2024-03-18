"use strict";

// Task: rewrite `total` from callbacks contract to promises
// Hint: do not use `async () =>` syntax

const total = (items) => {
  let result = 0;
  for (const item of items) {
    if (item.price < 0) {
      return Promise.reject("Negative price is not allowed");
    }
    result += item.price;
  }
  return Promise.resolve(result);
};

const electronics = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: -10 },
];

const result = total(electronics)
  .then((money) => {
    console.log(money);
  })
  .catch((err) => {
    console.log("err - ", err);
  });

// total(electronics, (error, money) => {
//   if (error) console.error({ error });
//   else console.log({ money });
// });
