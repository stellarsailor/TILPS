// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        const copyNums = [...nums]
        const diff = target - nums[i]
        
        copyNums[i] = null // so we can pass cases with duplicate numbers like [6,6]
        const secondIndex = copyNums.indexOf(diff)
        if(secondIndex > -1)  return [i, secondIndex]
    }
};
