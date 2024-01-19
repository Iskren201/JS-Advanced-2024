function slove(inputArray) {
  inputArray.sort(function (a, b) {
    return a - b;
  });

  let index = Math.ceil(inputArray.length / 2);

  return inputArray.slice(index);
}

console.log(slove([3, 19, 14, 7, 2, 19, 6]));
