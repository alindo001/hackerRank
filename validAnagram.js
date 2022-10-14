// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false



 var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    let sMap = new Map
    let tMap = new Map
    for(i=0; i<s.length;i++){
        if(sMap.hasOwnProperty(s[i])){
            sMap[s[i]] ++
        }else{
            sMap[s[i]] = 1
        }
        if(tMap.hasOwnProperty(t[i])){
            tMap[t[i]] ++
        }else{
            tMap[t[i]] = 1
        }
    }
    console.log(sMap)
    for(let key in sMap){
        if(sMap[[key]] !== tMap[key]){
            return false
        }
    }
    return "true"

    
 }


// console.log(isAnagram("rat", "car"))
console.log(isAnagram("anagram", "nagaram"))
// console.log(isAnagram("rat", "cars"))
