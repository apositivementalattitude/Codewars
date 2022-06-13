//https://github.com/apositivementalattitude/Codewars.git

//Count the number of divisors of a positive integer n.

//Random tests go up to n = 500000.

function getDivisorsCnt(n){
    // todo
  let output = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      output += 1;
    }
  }
  return output;
}