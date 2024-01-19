function slove(numbers) {
  const result = numbers
    .filter((_, index) => index % 2 !== 0)
    .map((element) => element * 2)
    .reverse();

  return result.join(" ");
}

console.log(slove([10, 15, 20, 25]));
