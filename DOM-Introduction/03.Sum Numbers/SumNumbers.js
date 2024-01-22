function calc() {
  // TODO: sum = num1 + num2

  let FirstNumber = document.getElementById("num1").value;
  let SecundNumber = document.getElementById("num2").value;

  const sum = Number(FirstNumber) + Number(SecundNumber);
  document.getElementById("sum").value = sum;
}
