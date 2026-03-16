// Day 52: Find Duplicate Elements in Array

function findDuplicates(arr) {

    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }

        }

    }

    return duplicates;
}

let numbers = [1, 2, 3, 4, 2, 5, 3];

let result = findDuplicates(numbers);

console.log("Duplicate elements:", result);
