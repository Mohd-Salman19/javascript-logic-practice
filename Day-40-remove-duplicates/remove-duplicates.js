// Day 40: Remove duplicates from array

function removeDuplicates(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

let numbers = [1, 2, 3, 2, 4, 1, 5];

let result = removeDuplicates(numbers);

console.log("Array without duplicates:", result);
