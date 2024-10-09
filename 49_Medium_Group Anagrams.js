/*
49. Group Anagrams
Medium

Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.


Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let array=[];
    let hasSave = false;

    for(let i=0; i<strs.length; i++){
        for(let m=0; m<array.length; m++){
            if(isAnagram(strs[i],array[m][0])){
                array[m].push(strs[i]);
                hasSave=true;
            }
        }
        if(!hasSave){
            array.push([strs[i]]);
        }
        hasSave=false;
    }    
    return array;
};

var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;

    const hash = new Map();

    // 統計 s 中每個字母的數量
    for (let i = 0; i < s.length; i++) {
        let c1 = s[i];
        hash.set(c1, (hash.get(c1) || 0) + 1);
    }

    // 檢查 t 中的字母，與 s 相減
    for (let i = 0; i < t.length; i++) {
        let c2 = t[i];
        if (!hash.has(c2)) {
            return false; // t 中出現了 s 中沒有的字母
        }
        hash.set(c2, hash.get(c2) - 1);
        if (hash.get(c2) < 0) {
            return false; // t 中某字母數量超過了 s 中的數量
        }
    }

    return true;
};

/*
// Ref 1st
var groupAnagrams = function(strs) {
    const hashMap = new Map();

    for(const str of strs){
        let numericalRepresentationOfStrings = new Array(26).fill(0);

        for(const char of str){
            let charValue = char.charCodeAt(0) - 97;

            numericalRepresentationOfStrings[charValue]++;
        }

        let key = numericalRepresentationOfStrings.join(',');

        let value = hashMap.get(key) || [];
        value.push(str);

        hashMap.set(key,value);
    }

    let result = [];
    for(const value of hashMap.values()){
        result.push(value)
    }
    
    return result

};
 */