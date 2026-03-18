// Day 54: Rotate Array by One Position (Right Rotation)

function rotateArray(arr) {

    let last = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = last;

    return arr;
}

let numbers = [1, 2, 3, 4, 5];

let result = rotateArray(numbers);

console.log("Rotated array:", result);
