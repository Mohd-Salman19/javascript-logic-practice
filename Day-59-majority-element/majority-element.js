// Day 59: Majority Element (LeetCode 169)

function majorityElement(nums) {

    let count = 0;
    let candidate = null;

    for (let i = 0; i < nums.length; i++) {

        if (count === 0) {
            candidate = nums[i];
        }

        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

let arr = [2, 2, 1, 1, 1, 2, 2];

console.log("Majority element:", majorityElement(arr));
