// Day 60: Maximum Subarray (LeetCode 53)

function maxSubArray(nums) {

    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {

        currentSum = Math.max(nums[i], currentSum + nums[i]);

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

let arr = [-2,1,-3,4,-1,2,1,-5,4];

console.log("Maximum subarray sum:", maxSubArray(arr));
