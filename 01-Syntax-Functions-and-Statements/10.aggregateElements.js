function aggregateElements(inputArray) {
  let sum = inputArray.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);

  let inverseSum = inputArray.reduce((acc, curr) => acc + 1 / curr, 0);
  console.log(inverseSum);

  let concatenated = inputArray.join("");
  console.log(concatenated);
}

aggregateElements([1, 2, 3]);
