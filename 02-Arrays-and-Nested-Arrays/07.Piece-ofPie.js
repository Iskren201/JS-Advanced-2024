function getPieceOfPie(pieFlavors, startFlavor, endFlavor) {
  const startIndex = pieFlavors.indexOf(startFlavor);
  const endIndex = pieFlavors.indexOf(endFlavor);

  if (startIndex === -1 || endIndex === -1) {
    console.log("Flavor not found in the pie!");
    return [];
  }

  const pieceOfPie = pieFlavors.slice(startIndex, endIndex + 1);

  return pieceOfPie;
}

console.log(
  getPieceOfPie(
    [
      "Pumpkin Pie",

      "Key Lime Pie",

      "Cherry Pie",

      "Lemon Meringue Pie",

      "Sugar Cream Pie",
    ],

    "Key Lime Pie",

    "Lemon Meringue Pie"
  )
);
