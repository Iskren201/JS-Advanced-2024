function daysInaMounth(month, year) {
  const date = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0).getDate();

  return lastDay;
}

console.log(daysInaMounth(1, 2012));

daysInaMounth(2, 2021);
