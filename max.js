function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const findMax = getMax(90, 80);
console.log(findMax);
