function solve(areaFn, volFn, input) {
  const data = JSON.parse(input);
  const result = [];

  for (let fig of data) {
    result.push({
      area: areaFn.call(fig),
      volume: volFn.call(fig),
    });
  }
  return result;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}
