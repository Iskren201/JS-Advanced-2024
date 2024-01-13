function circleArea(input) {
  let inputyType = typeof input;
  let result;
  // `We can not calculate the circle area, because we receive a {type of argument}.`

  if (inputyType === "number") {
    result = Math.pow(input, 2) * Math.PI;
    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${inputyType}.`
    );
  }
}

circleArea(5);
circleArea("name");
