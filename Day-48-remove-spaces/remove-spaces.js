// Day 48: Remove spaces from a string

function removeSpaces(str) {

    let result = str.replaceAll(" ", "");

    return result;
}

let text = "Hello World JavaScript";

let output = removeSpaces(text);

console.log("String without spaces:", output);
