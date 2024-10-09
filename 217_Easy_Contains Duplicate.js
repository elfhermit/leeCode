/*
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

// Hint: 利用**集合（Set）**的特性來解決這個問題，因為集合不允許重複元素。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
        } else {
            return true;
        }
    }
    return false;
};