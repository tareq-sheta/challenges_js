"use strict";
let tipCalc = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
let bill = [100, 125, 555, 44];
let tips = [];
let totals = [];
for (let index = 0; index < bill.length; index++) {
  //   console.log(bill[index]);
  tips.push(tipCalc(bill[index]));
  totals.push(tipCalc(bill[index]) + bill[index]);
  //   console.log(tips[index]);
}

console.log(bill);
console.log(tips);
console.log(totals);
