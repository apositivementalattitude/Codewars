//https://github.com/apositivementalattitude/Codewars.git

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    const index = s.indexOf('!')
    return s.slice(0, index)
  }