// Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

var searchInsert = function(nums, target) {
  // My Solution
  if(target < nums[0]) return 0
  if(nums[nums.length-1] < target) return nums.length

  for(let i = 0; i < nums.length; i++){
    if(nums[i] === target){
      return i
    }
    if(nums[i-1] <= target && target <= nums[i]) return i
  }
};

var searchInsert = function(nums, target) {
    // Other's solution
    for(let i = 0; i < nums.length; i++) {
      if(target === nums[i] || target < nums[i]) {
        return i
      }
    }
    return nums.length 
}
