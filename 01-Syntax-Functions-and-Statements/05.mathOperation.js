function mathOperation(num1, num2, str) {
  let result;

  switch (str) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    case "**":
      result = num1 ** num2;
      break;
  }
  console.log(result);
}

mathOperation(5, 6, "+");
mathOperation(3, 5.5, "*");

function mathOperationV2(num1, num2, str) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
    "**": (a, b) => a ** b,
  };

  if (operators[str]) {
    const result = operators[str](num1, num2);
    console.log(result);
  }
}
mathOperationV2(5, 6, "+");
mathOperationV2(3, 5.5, "*");
