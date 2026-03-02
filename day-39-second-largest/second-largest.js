function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }

        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

let numbers = [10, 25, 8, 45, 32];
let result = findSecondLargest(numbers);

console.log("Second Largest Number:", result);
