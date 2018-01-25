/**
 * @param {string} str
 * @returns {string}
 */

var input = 'the sky is blue';
var output = 'blue is sky the';

var reverseWords = function(str) {
    var reversedWords = str.trim()
        .split(' ')
        .filter(word => word.trim())
        .map(word => {
            console.log(word, 'trimmed:' + '"' + word.trim() + '"');
            return word.trim();
        })
        .reverse()
        .join(' ');
    return reversedWords;
    // trim intiial string, split into words, map words into trimmed version of selves
        // reverse string via swap method
    // return reversed string
};
/*
// Strategy: trim string, split string into words, trim the edges (gets rid of the after effects of double spaces)
    // reverse locations w/ swap method
        // return joined version
        
// Big-o: 
    // Time: Linear: O(n * m) where n = number of elements in input string, where m = input string element length
    
// transformation
// Given: '  the  sky   is    blue ':
// initial trim: 'the  sky   is    blue'
// split into words: 'the', ' sky', ' is', '  blue'
// trim each word 'the', 'sky', 'is', 'blue'
// reversal: 'blue', 'is', 'sky', 'the'
// join and return: 'blue is sky the'

// edge cases?
// all whitespace?
    // resolution: initial trim will result in nothing
// single char amongst white space
    // same as above

var reverseWords = function(str) {
    // constraints: none
    
    // trim intiial string, split into words, map words into trimmed version of selves
        // reverse string via swap method
    // return reversed string
};
*/