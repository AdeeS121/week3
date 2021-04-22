
function allTotals (num1, num2, num3) { 

   function getNums() {
      console.log(`numbers passed to the function are: ${num1}, ${num2}, ${num3}`);
   }
   
   function getAvg() {
    let avg = (num1 + num2 + num3) / 3;
    console.log(`avg of numbers: ${avg}`); 
   }

   function getSum() {
      let sum = num1 + num2 + num3;
console.log(`sum of numbers: ${sum}`);
}

function getProduct() {
   let product = num1 * num2 * num3;
   console.log(`product of numbers in the list: ${product}`);
}
getNums()
getAvg()
getSum()
getProduct()
}

allTotals(1, 3, 5)
