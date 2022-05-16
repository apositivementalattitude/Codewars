//https://github.com/apositivementalattitude/Codewars.git
function checkForFactor (base, factor) {
    // code here
    let result = base % factor
    if (result === 0) {
      return true
    }else {
      return false
    }
  }