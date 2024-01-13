function largestNumber(arr1, arr2, arr3) {
  let result;

  if (arr1 > arr2 && arr1 > arr3) {
    result = arr1;
  } else if (arr2 > arr1 && arr2 > arr3) {
    result = arr2;
  } else if (arr3 > arr1 && arr3 > arr2) {
    result = arr3;
  }

  console.log(`The largest number is ${result}.`);
}

function largestNumberV2(arr1, arr2, arr3) {
  const result = Math.max(arr1, arr2, arr3);
  console.log(`The largest number is ${result}.`);
}

largestNumber(5, -3, 16);
largestNumberV2(5, -3, 16);
