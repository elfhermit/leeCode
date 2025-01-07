/*
Medium
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

url: https://leetcode.com/problems/product-of-array-except-self/
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// By Fixed
var productExceptSelf = function (nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // 計算前綴積
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;  // 存放當前元素的前綴積
        prefix *= nums[i];  // 更新前綴積
    }

    // 計算後綴積並直接更新結果
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;  // 結果是前綴積 × 後綴積
        suffix *= nums[i];  // 更新後綴積
    }

    return result;
};


// Time limit exceeded
var productExceptSelf = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            if (nums[j] === 0) {
                result[i] = 0;
                break;
            }
            result[i] = nums[j] * (result[i] || 1);
        }
    }

    return result;
};

/*
// Ref 1st,  幾乎差不多
var productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = Array(n);
    let prefix = nums[0];
    ans[0] = 1;
    for (let i = 1; i < n; i++) {
        ans[i] = prefix;
        prefix *= nums[i];
    }
    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= postfix;
        postfix *= nums[i];
    }
    return ans;
};
*/