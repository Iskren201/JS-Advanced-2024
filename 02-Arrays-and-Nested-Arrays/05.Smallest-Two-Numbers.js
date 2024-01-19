function slove(numbers) {
  let smallest1 = Number.POSITIVE_INFINITY;
  let smallest2 = Number.POSITIVE_INFINITY;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest1) {
      smallest2 = smallest1;
      smallest1 = numbers[i];
    } else if (numbers[i] < smallest2) {
      smallest2 = numbers[i];
    }
  }

  console.log(smallest1, smallest2);
}

slove([30, 15, 50, 5]);
