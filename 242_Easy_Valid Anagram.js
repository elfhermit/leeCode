/*242. Valid Anagram
Easy
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;

    const hashS = new Map(),
          hashT = new Map();
    // 計算s 字母分類, 數量
    for(let i=0;i<s.length;i++){
        let c1 = s[i];        
        if(hashS.has(c1)){
            hashS.set(c1, hashS.get(c1) + 1);
        }else{
            hashS.set(c1, 1);
        }

        let c2 = t[i];
        if(hashT.has(c2)){
            hashT.set(c2, hashT.get(c2) + 1);
        }else{
            hashT.set(c2, 1);
        }
    }
    
    for (var key of hashS.keys()) {
        if(hashS.get(key) !== hashT.get(key))
            return false;
    }
    return true;
};

// Ref 1st

/*
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
  let str1Map = new Array(26).fill(0);
  let str2Map = new Array(26).fill(0)
  for(let i=0; i<s.length; i++){
    str1Map[s[i].charCodeAt() - 97]++
    str2Map[t[i].charCodeAt() - 97]++
  }
  for(let i=0; i<str1Map.length; i++){
    if(str1Map[i] !== str2Map[i]) return false
  }
  return true
};
 */

// Ref GPT
/*
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

*/