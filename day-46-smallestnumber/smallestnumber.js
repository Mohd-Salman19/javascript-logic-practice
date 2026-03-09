let arr = [2, 5, 1, 3, 0];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Smallest number in a array ", min);
