// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {

    let stack = []
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(') {
            stack.push(')')
        } else if(s[i] === '{'){
            stack.push('}')
        } else if(s[i] === '['){
            stack.push(']')
        } else {
            if(s[i] === stack[stack.length - 1]) stack.pop()
            else return false
        }
    }
    
    return stack.length === 0 ? true : false
    
};
