// https://leetcode.com/problems/palindrome-number/

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function(x) {
    
    let str = x.toString().split('')
    
    while(str.length > 1){
        if(str.shift() !== str.pop()){
            return false
        }
    }
    return true
};
