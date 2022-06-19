//https://github.com/apositivementalattitude/Codewars.git


/*Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.*/

function squareOrSquareRoot(array) {
    return array.map(n => Math.sqrt(n) == Math.sqrt(n).toFixed(0) ? Math.sqrt(n) : n * n);  
  }