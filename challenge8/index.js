"use strict";
let tipCalc = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
let calcAverage = function (Arr) {
  let sum = 0;
  for (let index = 0; index < Arr.length; index++) {
    sum += Arr[index];
  }
  return sum;
};
let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
for (let index = 0; index < bill.length; index++) {
  // console.log(good);
  tips.push(tipCalc(bill[index]));
  totals.push(tipCalc(bill[index]) + bill[index]);
  //   console.log(tips[index]);
}

console.log(bill);
console.log(tips);
console.log(totals);
// console.log(calcAverage(console.log();));
