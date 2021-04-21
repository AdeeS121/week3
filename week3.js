const getTotals = (num1, num2, num3) => {
console.log(`\nnumbers pased to the function are: ${num1}, ${num2}, ${num3} `);

let avgOfNums = (num1 + num2 + num3) / 3;
console.log(`\naverage of numbers: ${avgOfNums}`);

let totalOfNums = num1 + num2 + num3;
console.log(`\nsum of numbers: ${totalOfNums}`);

let productOfNums = num1 * num2 * num3;
console.log(`\nproduct of numbers in the list: ${productOfNums}`)
}
getTotals(1, 3, 5)
