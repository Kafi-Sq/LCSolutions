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