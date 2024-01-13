function stringLength(arr1, arr2, arr3) {
  let sumLength;
  let averageLength;

  let firstArr = arr1.length;
  let secundArr = arr2.length;
  let thirdArg = arr3.length;

  sumLength = firstArr + secundArr + thirdArg;

  averageLength = Math.floor(sumLength / 3);

  console.log(sumLength);
  console.log(averageLength);
}

stringLength("chocolate", "ice cream", "cake");
