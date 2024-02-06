const arr = [60, 85, 78, 90, 55, 41, 62];

function getMax(numbers) {
  let max = arr[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

const findMax = getMax(arr);
console.log("max value is", findMax);
