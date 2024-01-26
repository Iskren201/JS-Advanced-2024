function solve() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;

  input = input.toLowerCase();

  let words = input.split(" ");

  let result;

  if (currentCase === "Camel Case") {
    result =
      words[0] +
      words
        .slice(1)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
  } else if (currentCase === "Pascal Case") {
    result = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).join("")
    );
  } else {
    result = "Error!";
  }

  document.getElementById("result").innerHTML = result;
}
