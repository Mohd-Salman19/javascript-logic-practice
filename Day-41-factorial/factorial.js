// Day 41: Factorial using Loop

function factorialLoop(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

console.log("Factorial using loop:", factorialLoop(5));


// Day 41: Factorial using Recursion

function factorialRecursion(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorialRecursion(n - 1);
}

console.log("Factorial using recursion:", factorialRecursion(5));
