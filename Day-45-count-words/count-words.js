// Day 45: Count words in a sentence

function countWords(sentence) {

    let words = sentence.split(" ");

    return words.length;
}

let text = "I love JavaScript";

let result = countWords(text);

console.log("Number of words:", result);
