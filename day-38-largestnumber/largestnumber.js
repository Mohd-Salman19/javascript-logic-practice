// Day 38: Find largest number in an array

function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

let numbers = [10, 25, 8, 45, 32];

let result = findLargest(numbers);

console.log("Largest number:", result);
