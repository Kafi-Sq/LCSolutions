// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    let newS = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase()
    let i = 0
    let j = newS.length - 1

    while(i <= j) {
        if(newS[i] !== newS[j]) {
            return false
        }
        i++
        j--
    }
    return true
};