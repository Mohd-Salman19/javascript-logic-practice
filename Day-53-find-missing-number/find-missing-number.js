// Day 53: Find Missing Number in Array

function findMissingNumber(arr, n) {

    let totalSum = (n * (n + 1)) / 2;

    let arraySum = 0;

    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];
    }

    return totalSum - arraySum;
}

let numbers = [1, 2, 3, 5];

let result = findMissingNumber(numbers, 5);

console.log("Missing number:", result);
