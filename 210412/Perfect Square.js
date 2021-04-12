// https://leetcode.com/problems/valid-perfect-square/
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Follow up: Do not use any built-in library function such as sqrt.

// Taylor series
 var isPerfectSquare = function(num) {
     // Taylor Series
     // 1+3+5+7...
     let i = 1;
     while(num > 0){
         num -= i
         i += 2
     }
     return num === 0
};

// Binary search
var isPerfectSquare = function(num) {
    if(num < 1) return false
    if(num === 1) return true

    let left = 1;
    let right = num;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(mid * mid === num){
            return true;
        } else if (mid * mid > num){
            right = mid - 1;
        } else if (mid * mid < num){
            left = mid + 1;
        }
    }
    return false
};
