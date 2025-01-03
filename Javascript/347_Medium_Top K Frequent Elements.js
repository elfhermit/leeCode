/*
Medium
347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

url: https://leetcode.com/problems/top-k-frequent-elements/
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    const numMap = new Map();
    for (number of nums) {
        if (numMap.has(number)) {
            numMap.set(number, numMap.get(number) + 1);
        } else {
            numMap.set(number, 1);
        }
    }

    // 排序 遞減	
    const sortedByValue = new Map([...numMap.entries()].sort((a, b) => b[1] - a[1]));
    // 避免超過
    if (k > sortedByValue.size)
        k == sortedByValue.size;

    const array = [];
    let i = 0;
    for (let [key] of sortedByValue) {
        if (i >= k)
            return array;
        array.push(key);
        i++;
    }
    return array;
};


/*
// Ref 1st
var topKFrequent = function(nums, k) {

    let hashTable = new Map();
    let result =[];

    for (let i =0; i < nums.length; i++) {
        if(!hashTable.has(nums[i])) {
            hashTable.set(nums[i], { count: 1});
            continue;
        }
        hashTable.get(nums[i]).count++;
    }

    return Array.from(hashTable).sort((a,b) => b[1].count - a[1].count).map((a) => a[0]).slice(0,k);
    
};
*/