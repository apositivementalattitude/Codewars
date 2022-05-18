//https://github.com/apositivementalattitude/Codewars.git

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    //declare two variables for the first root and second root

    let root1;
    let root2;

    //find the square root of the parameter and make sure it's perfect
    
    if (Math.sqrt(sq) % 1 === 0){

    //assign the first variable to get the square root of the first parameter

      root1 = Math.sqrt(sq)

    //assign the second variable to get the next square root

      root2 = root1+1;
    }else{
      return -1;
    }
    return root2*root2;
  }