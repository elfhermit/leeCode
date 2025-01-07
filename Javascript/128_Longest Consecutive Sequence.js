/*
Medium
128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

url: https://leetcode.com/problems/longest-consecutive-sequence/
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 1. 排除重複元素
    // 2. sort 由小到大
    // 3. 找出最長的連續數字
    // 4. return 長度
    let set = new Set(nums);
    let arr = [...set].sort((a, b) => a - b);
    let max = 0;
    let count = 1;

    if (arr.length === 0) return 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === 1) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 1;
        }
    }

    return Math.max(max, count);
};

/*
var longestConsecutive = function(nums) {
    if(nums.length===0) return 0
 nums = new Int32Array(nums).sort();
  let max = 1, window = 1;
  for (let i = 1; i < nums.length; i++) {
    if(nums[i-1]==nums[i])continue;
      window = nums[i - 1] + 1 === nums[i] ? window + 1 : 1;
      max = Math.max(window, max);
  }
  return max; 
};
*/