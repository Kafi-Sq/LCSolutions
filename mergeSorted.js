var isValid = function(s) {
    if (s.length === 0) return true
    if (s.length % 2 !== 0) return false
    let checkArr = []

    for(let i of s) {
        //if(s[0] === ')' || s[0] === '}' || s[0] === ']') return false
        if(i === '(' || i === '{' || i === '['){
            checkArr.push(i)
        }
        if(i === ')' || i === '}' || i === ']'){
            if(i === ')'){
                if(checkArr[checkArr.length-1] === '('){
                    checkArr.pop()
                }else {
                    return false
                }
            }
            if(i === ']'){
                if(checkArr[checkArr.length-1] === '['){
                    checkArr.pop()
                }else {
                    return false
                }
            }
            if(i === '}'){
                if(checkArr[checkArr.length-1] === '{'){
                    checkArr.pop()
                }else {
                    return false
                }
            }
        }
    }
    return !checkArr.length
};