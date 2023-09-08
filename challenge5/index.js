let scoreKoalas1 = 88;
let scoreKoalas2 = 91;
let scoreKoalas3 = 110;

let scoreDolphins1 = 96;
let scoreDolphins2 = 108;
let scoreDolphins3 = 89;

let calcAVRG = function (score1, score2, score3) {
  let sum = score1 + score2 + score3;
  return sum / 3;
};

if (
  calcAVRG(scoreDolphins1, scoreDolphins2, scoreDolphins3) >
  calcAVRG(scoreKoalas1, scoreKoalas2, scoreDolphins3)
) {
  console.log("Dolphins win the trophy");
} else if (
  calcAVRG(scoreDolphins1, scoreDolphins2, scoreDolphins3) <
  calcAVRG(scoreKoalas1, scoreKoalas2, scoreDolphins3)
) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}
