function allTotals() {
  let num1 = 1;
  let num2 = 3;
  let num3 = 5;

  let allNums = getNums(num1, num2, num3);
  let average = getAvg(num1, num2, num3);
  let addSum = getSum(num1, num2, num3);
  let product = getProduct(num1, num2, num3);

  console.log(allNums);
  console.log(average);
  console.log(addSum);
  console.log(product);
}

function getNums(num1, num2, num3) {
  console.log(`numbers passed to the function are: ${num1}, ${num2}, ${num3}`);
}

function getAvg(num1, num2, num3) {
  average = (num1 + num2 + num3) / 3;
  console.log(`average of numbers: ${average}`);
}

function getSum(num1, num2, num3) {
  addSum = num1 + num2 + num3;
  console.log(`sum of numbers: ${addSum}`);
}

function getProduct(num1, num2, num3) {
  let product = num1 * num2 * num3;
  console.log(`product of numbers in the list: ${product}`);
}

console.log(allTotals());

