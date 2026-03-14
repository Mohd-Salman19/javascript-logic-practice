// Day 51: Capitalize First Letter of Each Word

function capitalizeWords(str) {

    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {

        words[i] = words[i][0].toUpperCase() + words[i].slice(1);

    }

    return words.join(" ");
}

let text = "hello world javascript";

let result = capitalizeWords(text);

console.log("Capitalized string:", result);
