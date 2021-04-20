// https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function(nums) {
//  https://leetcode.com/problems/maximum-subarray/discuss/562928/JavaScript-Kadane's-algorithm-implementation-w-explanation
    let max = nums[0]
    let current = Math.max(max, 0)

    for (let i = 1; i < nums.length; i++) {
        current += nums[i]
        max = Math.max(max, current)
        current = Math.max(current, 0)
    }

    return max;

};

function maxSubArray(A) {
//   https://leetcode.com/problems/maximum-subarray/discuss/20471/JavaScript-solution
    var prev = 0;
    var max = -Number.MAX_VALUE;

    for (var i = 0; i < A.length; i++) {
        prev = Math.max(prev + A[i], A[i]);
        max = Math.max(max, prev);
    }
    return max;
}
