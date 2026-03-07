// Day 44: Count vowels in a string

function countVowels(str) {

    let count = 0;

    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            count++;
        }

    }

    return count;
}

let text = "javascript";

let result = countVowels(text);

console.log("Number of vowels:", result);
