function calculateMoneyForFruit(fruit, weightInGrams, pricePerKilogram) {
  const weightInKilograms = weightInGrams / 1000;
  const money = (weightInKilograms * pricePerKilogram).toFixed(2);

  console.log(
    `I need $${money} to buy ${weightInKilograms.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

calculateMoneyForFruit("orange", 2500, 1.8);
