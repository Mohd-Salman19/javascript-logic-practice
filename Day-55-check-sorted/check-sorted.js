// Day 55: Check if array is sorted

function isSorted(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] > arr[i + 1]) {
            return false;
        }

    }

    return true;
}

let numbers = [1, 2, 3, 4, 5];

if (isSorted(numbers)) {
    console.log("Array is Sorted");
} else {
    console.log("Array is NOT Sorted");
}
