// Day 50: Character Frequency in String

function charFrequency(str) {

    let frequency = {};

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }

    }

    return frequency;
}

let text = "hello";

let result = charFrequency(text);

console.log("Character frequency:", result);
