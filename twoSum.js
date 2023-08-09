var twoSum = function(nums, target) {
    let map = {};
    
    for(let i = 0; i < nums.length; i++) {
        let val = (target - nums[i])

        if(map[nums[i]] !== undefined) {
            return [i, map[nums[i]]]
        }else {
            map[val] = i
        }
    };
};