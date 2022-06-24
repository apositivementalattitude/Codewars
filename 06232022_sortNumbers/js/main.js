//https://github.com/apositivementalattitude/Codewars.git

function solution(nums){
    if (nums !== null) {
      return nums.sort((a,b) => a - b)
    }else{
      return [];
    }
  }