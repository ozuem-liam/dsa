// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let n = s.length
    let oldSize = 0
    let mySet1 = new Set()
    let mySet2 = new Set()

    for(let i=0; i<n; i++) {
        if(!mySet1.has(s[i])) {
            mySet1.add(s[i])
        } else {
            oldSize = mySet1.size
            break
        }
    }

    for(let j=1; j<n; j++) {
        if(!mySet2.has(s[j])) {
            mySet2.add(s[j])
        } else {
            if (mySet2.size > oldSize) {
                oldSize = mySet2.size
            }
        }
    }
    return oldSize;
};

const s = "abcabcbb"
const s1 = "bbbbb"
const s2 = "pwwkew"
const s3 = "pwrlvawkew"

console.log(lengthOfLongestSubstring(s))