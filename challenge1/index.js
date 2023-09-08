// Mark and John are trying to compare their BMI (Body Mass Index),
//  which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
let massMark = 78;
let heightMark = 1.68;
let massJohn = 92;
let heightJohn = 1.95;

let markIBM = massMark / (heightMark * heightMark);
let johnIBM = massJohn / (heightJohn * heightJohn);
console.log(`John's IBM is ${johnIBM},Marks's IBM is ${markIBM}`);
