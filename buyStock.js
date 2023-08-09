var maxProfit = function(prices) {
    let smallest = prices[0]
    let biggest = 0
    
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < smallest){
            smallest = prices[i]
        }
        if(prices[i] - smallest > biggest){
            biggest = prices[i] - smallest
        }
    }
    
    return biggest
}