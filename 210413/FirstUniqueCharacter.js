// https://leetcode.com/problems/first-unique-character-in-a-string/submissions/
// Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */

// My Solution
var firstUniqChar = function(s) {
    let cache = {}
    
    let arr = s.split('')
    
    for(let i = 0; i < arr.length; i++){
        if(cache[arr[i]]){
            cache[arr[i]]++
        } else {
            cache[arr[i]] = 1
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(cache[arr[i]] === 1) return i
    }
    
    return -1
};

// Other's Solution
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; ++i) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
    }
    return -1;
}
