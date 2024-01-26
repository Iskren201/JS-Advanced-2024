function subtract() {
  let fNumber = document.getElementById("firstNumber").value;
  let sNumber = document.getElementById("secondNumber").value;
  let resultRef = document.getElementById("result");
  let result = Number(fNumber) - Number(sNumber);

  resultRef.textContent = result;
}
