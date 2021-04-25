// https://leetcode.com/problems/climbing-stairs/

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
    let cache = {}
    
    let logic = function fib(n){
        if(n in cache){
            return cache[n]
        } else {
            if(n < 3) {
                return n
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n]
            }
        }
    }
    
    return logic(n)
};
