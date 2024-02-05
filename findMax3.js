const heroAlom = 85;
const ranuMondol = 91;
const jayedKhan = 90;

if (heroAlom > ranuMondol && heroAlom > jayedKhan) {
  console.log("Hero Alom is the king");
} else if (ranuMondol > heroAlom && ranuMondol > jayedKhan) {
  console.log("Ranu Mondol is the Queen");
} else {
  console.log("Jayed Khan is the King");
}

//use function to find max number
function getMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const findMax = getMax(10, 20, 40);
console.log(findMax);
