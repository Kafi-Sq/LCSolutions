var canConstruct = function(ransomNote, magazine) {
    let map = {}
    
    for(let i of magazine){
        map[i] = (map[i] || 0) + 1
    }
    for(let j of ransomNote){
        if(!map[j]) return false
        map[j]--
    }
    return true
};