let scoreKoalas1 = 88;
let scoreKoalas2 = 91;
let scoreKoalas3 = 110;

let scoreDolphins1 = 96;
let scoreDolphins2 = 108;
let scoreDolphins3 = 89;

let scoreDolphinsAVRG = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
let scoreKoalasAVRG = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
if (scoreDolphinsAVRG > scoreKoalasAVRG) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphinsAVRG < scoreKoalasAVRG) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}
