function colorize() {
  const talbe = document.querySelector("table");

  let rows = talbe.querySelectorAll("tr:not(:first-child)");

  for (let i = 0; i < rows.length; i++) {
    if (i % 2 === 0) {
      rows[i].style.backgroundColor = "Teal";
    }
  }
}
