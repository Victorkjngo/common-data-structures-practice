/**
 * @param {number[]} nums
 * @return {number}
 */
var input = [1, 2, 2, 3, 1, 4, 2];
var output = 6;

var findShortestSubArray = function(nums) {
    const findDegreeAndDegreeValue = (nums) => {
      let counts = {};
      let maxDegree = 0;
      let maxDegreeValue = -Infinity;
        
      nums.forEach(num => {
         if (counts[num]) {
             counts[num]++;
         } else {
             counts[num] = 1;
         }
      });
    
      for (var num in counts) {
          if (counts[num] > maxDegree) {
              maxDegree = counts[num];
              maxDegreeValue = num;
          }
      }
    
        for (var num in counts) {
          if (counts[num] > maxDegree) {
              maxDegree = counts[num];
              maxDegreeValue = num;
          }
      }
        
        
      return [Number(maxDegree), Number(maxDegreeValue)];
    };
    
    var degreeAndDegreeValue = findDegreeAndDegreeValue(nums);
    var [maxDegree, maxDegreeValue] = degreeAndDegreeValue;
    var firstIndexOfMaxDegreeValue;
    var lastIndexOfMaxDegreeValue;
    
    console.log('Deg and deg value', degreeAndDegreeValue);
    // console.log('max degree', maxDegree);
    for (let i = 0; i < nums.length; i++) {
       let num = nums[i];
        
        if (num === maxDegreeValue) {
            firstIndexOfMaxDegreeValue = num;
            break;
        }
    }
    
    for (let j = nums.length - 1; j >= 0; j--) {
       let num = nums[j];
        
        if (num === maxDegreeValue) {
            lastIndexOfMaxDegreeValue = num;
            break;
        }
    }
    
    return lastIndexOfMaxDegreeValue - firstIndexOfMaxDegreeValue + 1;
    
    
};

/*
// Strategy: Itereate thru input to find degree of array,
    // check contiguous subsets of array to see if degree matches arrayDegree AND degree less than minDegree
        // return smallestDegree

// Strategy +2: Itereat thru input to find degree of array and its value
    // iterate from begining of array to find first instance of degree value
    // iterate from end of array to begining to find last instance of degree value
        // the difference between the 2 indices + 1 is the max length of a continguous array
            // [1, 2, 2, 3, 1, 4, 2]
                   |--------------|
                   
// Big O:
// Time: quadratic
// Space: Linear

// Transformation
// Given input [1, 2, 2, 3, 1, 4, 2]
// minDegree = input.length;
// find degree of input array
    // {1: 2, 2: 3, 3: 1, 4: 1}
    // iteraete thru count find max
    // degree is 3 (2 appears 3 times)

// test subsets of input (min length is degree)
    // 
    // [1, 2, 2]
        // degree is 2
    // [1, 2, 2, 3]
        // degree is 2
    // ...
    // [1, 2, 2, 3, 1, 4, 2]
        // degree is 3! Update minDegree to 7!
    // move begining pointer of slice to 1
    // [2, 2, 3]
        // degree is 2
    // ...
    // [2, 2, 3, 1, 4, 2]
        // degree is 3! Update minDegree to 6!
    
    // return minDegree
    
// Transformation #2
// given input [1, 2, 2, 3, 1, 4, 2]
// minDegree = input.length;
// find degree of input array
    // {1: 2, 2: 3, 3: 1, 4: 1}
    // iteraete thru count find max
    // degree is 3 (2 appears 3 times), degree value is 2

// firstIndexOfDegreeValueInstance = -1;
// lastIndexOfDegreeValueInstance = -1
// iterate from beg of arr --> end
    // if element = degreeValue
        // firstIndexOfDegreeValueInstance = index (1)
        // break;
// firstIndexOfDegreeValueInstance = 1
// iterate from end of arr --> beg
    // if element = degreeValue
        // lastIndexOfDegreeValueInstance = index (6)
        // break;
// lastIndexOfDegreeValueInstance = 6

// return difference + 1
    // return 6!

var findShortestSubArray = function(nums) {
    // constraints: none

    // SKIPPED!
};

*/