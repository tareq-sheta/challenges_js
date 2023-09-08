// Mark and John are trying to compare their BMI (Body Mass Index),
//  which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
let mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
};
let john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
};
let calcIBM = function (mass, height) {
  return mass / (height * height);
};
let markIBM = calcIBM(mark.mass, mark.height);
let johnIBM = calcIBM(john.mass, john.height);
console.log(`John's IBM is (${johnIBM}),Marks's IBM is (${markIBM})!`);
if (markIBM > johnIBM) {
  console.log(`Marks's IBM is Higher John's IBM`);
} else {
  console.log(`John's IBM is Higher Marks's IBM`);
}
