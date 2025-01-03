/*
[Easy]
1. Two Sum

url: https://leetcode.com/problems/two-sum/description/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
};


/*
// Ref 1st solution

var twoSum = function(nums, target) {
    let hash = {};
    for(let i=0; i<nums.length; i++){
        const rem = target - nums[i];
        if(rem in hash){
            return [hash[rem], i];
        }
        hash[nums[i]] = i;
    }
};
 */